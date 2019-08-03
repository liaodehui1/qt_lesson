const https=require('https')
const cheerio=require('cheerio')
const fs=require('fs')
const path=require('path')
//GET POST
//https.createServer
https.get('https://www.smzdm.com/youhui/',function(res){
    res.setEncoding('utf-8')
    let html=''
    res.on('data',function(chunk){
        html+=chunk
    })
    res.on('end',function(){
        // console.log(html)
        const $=cheerio.load(html,{//手动加载html,$相当于jquery的$
            decodeEntities:false//true将解码和html实体
        })
        //只有一个参数 整个document
        let lists=[]
        $('.list.list_preferential').each(function(){
            const _this=this
            //没加_this 整个文档找.itemName a
            //加了_this 当前list下找.itemName a
            let title = $('.itemName a',_this).contents().filter(function(index,content){
                return content.nodeType === 3
            }).text()
            let price=$('.red',_this).text()
            let img=$('.picLeft img',_this).attr('src')
            lists.push({
                title:title,
                price:price,
                img:img
            })
            saveImage('./img/',img)
        })
        saveList('./data/lists.json',lists)
    })
})
function saveImage(imgDir,imgUrl){
    https.get(imgUrl,(res)=>{
        res.setEncoding('binary')
        let data=''
        const imgName=path.basename(imgUrl)
        // res.on('data',(chunk)=>{
        //     data+=chunk
        // })
        // res.on('end',()=>{
        //     //www.smzdm.com/a.png
        //     let basename=path.basename(imgUrl)
        //     fs.writeFile(imgDir+basename,data,'binary',(err)=>{
        //         if(!err){
        //             console.log('img saved')
        //         }
        //     })
        // })
        res.pipe(fs.createWriteStream(imgDir+imgName,{encoding:'binary'}))
    })
}
function saveList(path,lists){
    fs.writeFile(path,JSON.stringify(lists),(err)=>{
        if(!err){
            console.log('lists saved')
        }
    })
}