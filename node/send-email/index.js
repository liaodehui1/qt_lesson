
/**
 * nodemailer 邮件发送
 */
const nodemailer=require('nodemailer')
const ejs=require('ejs')
const fs=require('fs')
const path=require('path')

//readFileSync 同步读取文件
const template=ejs.compile(fs.readFileSync(path.resolve(__dirname,'email.ejs'),'utf-8'))

//template 函数
//返回html字符串
const html=template({
    title:'Ejs',
    desc:'使用Ejs模版引擎渲染'
})

// console.log(html)

let transporter=nodemailer.createTransport({
    service:'qq',//qq邮箱，支持列表：https://nodemailer.com/smtp/well-known/
    port:465,//SMTP端口 25(大部分) 465(SMTPS=>SMTP+SSL) 587(Gmail邮箱)
    secureConnection:true,// 使用了 SSL
    auth:{
        user:'xxxx@qq.com',//qq账号
        //smtp授权码
        //qq邮箱-设置-账户-开启POP3/SMTP服务
        pass:'xxxx'
    }
})

let mailOptions={
    from:'"无心少年不懂情" <1959956996@qq.com>',//发件人
    to:'1902109771@qq.com',//收件人
    subject:'nodemainer',//主题
    //内容 text/html
    //字符串/流
    html:html,
    //附件 大文件添加
    //此处用于为html中插入图片
    attachments:[
        {
            filename:'demo.jpg',
            path:path.resolve(__dirname,'demo.jpg'),
            cid:'01'//cid属性 对于email.ejs中的img[src]
        }
    ]
}

//发送邮件
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        return console.log(err)
    }else{
        console.log('Message sent: %s',info.messageId)
    }
})