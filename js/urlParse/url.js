//url查询字符串解析
function parse(urlStr){
    let obj={}
    if(urlStr.indexOf('?')!==-1){//有参数
        const paramStr=urlStr.split('?')[1]
        if(paramStr){//有参数
            const paramArr=paramStr.split('&')
            paramArr.forEach(element => {
                if(element.indexOf('=')!==-1){//有值
                    let [key,value]=element.split('=')
                    value=decodeURIComponent(value)
                    if(obj.hasOwnProperty(key)){////有重名参数
                        obj[key]=[].concat(obj[key],value)
                    }else{
                        obj[key]=value
                    }
                }else{
                    obj[element]=''
                }
            });
        }
    }
    return obj
}

exports.parse=parse