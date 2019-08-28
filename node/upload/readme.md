## express 开发框架
+ 安装 npm i express -S
+ 获取express模块 var app=express()
+ 默认监听3000
+ 处理请求
    1. app.get('/',function(req,res)) 处理get请求
    2. app.post('/upload',function(req,res)) 处理post请求
## multer 文件上传
+ 使用硬盘存储 multer.diskStorage
    - 使用destination和filename确定文件
        1. destination可以为字符串表示路径,没有此目录将自动创建  
            当为函数时,路径必须手动创建好
        2. filename 时间戳+'-'+文件原始名称
+ single(fieldname) 单文件上传
+ array(fieldname,maxCount) maxCount个文件上传
+ fields([{name:'fieldname',maxCount:}...]) 混合文件上传
+ none() 文本文件上传
## send与end的区别
1. send参数可以是对象,end只能是字符串或二进制数据
2. send通常用于有返回数据时,end通常用于结束响应