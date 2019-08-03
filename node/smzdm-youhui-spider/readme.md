##爬虫  
爬数据,网站  
1. 去别人的网站,html
2. 分析
##npm
- npm init -y 快速创建初始化package.json  
##cheerio  
    cheerio是爬虫必备神器 为了能使用JQuery语法解析爬取的html
    npm i cheerio -s 安装cheerio  
###cheerio.contents  
    返回一个包含子元素的cheerio对象集合
###cheerio.filter  
    迭代一个cheerio对象集合 function(index,ele)  
###Cheerio.text
    获得元素的text内容  
##nodeType
    元素节点返回1  
    属性节点返回2  
    文本节点返回3  
##res
实现了 可读流的接口 很多模块继承了流  