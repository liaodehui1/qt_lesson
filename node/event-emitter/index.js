//歌曲搜索下载 node .\index.js 歌名
const Event=require('events')//事件触发器
const request=require('request')
const inquirer=require('inquirer')
const fs=require('fs')
const ev=new Event()

//订阅on需要在发布emit之前,否则无效
ev.on('choose',function(songs,keyWords){
    //命令行交互
    inquirer.prompt([{
        type:'list',
        name:'songs',//回答对象中的键
        message:`共${songs.length}首，回车选择`,
        choices:songs.map((s,i)=>`${i}:${s.name}`)
    }]).then(choice=>{
        // console.log(choice)//{songs:'${i}：${s.name}'}
        const {songs:song}=choice
        // console.log(song)
        const index=parseInt(song.split(':')[0])
        const selected=songs[index]
        // console.log(selected)
        const {id}=selected
        request({
            url:`http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
            json:true
            },
            (err,res,body)=>{
                if(err){
                    console.log('错误:',err)
                    return
                }
                // console.log(body)//{data:[{id,url}],code}
                const {url}=body.data[0]
                if(!url){
                    console.log('没有找到该歌曲')
                    return
                }
                //解码
                keyWords=decodeURIComponent(keyWords)
                //下载歌曲
                request(url).pipe(fs.createWriteStream(`${keyWords}.mp3`))
            }
        )
    })
})
ev.on('search',function(keyWords){
    //请求 搜索结果 下一步 选择

    //使用对应的编码替换所有非字母数字字符
    keyWords=encodeURIComponent(keyWords)
    //请求
    request({
        url:`http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${keyWords}`,
        json:true
        },
        (err,res,body)=>{
            if(err){
                console.log('错误:',err)
                return
            }
            // console.log('响应信息',res)
            // console.log(body)
            if(body&&body.result.songs){
                ev.emit('choose',body.result.songs,keyWords)
            }else{
                console.log(`没有${keyWords}歌曲`)
            }
        }
    )
})
function main(){
    //process进程 
    // console.log(process.argv)
    const argv=process.argv.slice(2)
    const keyWords=argv[0]
    //搜索 选择 播放
    ev.emit('search',keyWords)
}
main()
