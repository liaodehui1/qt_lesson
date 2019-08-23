## npm
### 包版本
+ X.Y.Z X表示主版本号, Y表示次版本号, Z表示补丁更新
    - 重大代码修改 修改主版本号
    - 新增功能 次版本号
    - 旧功能修改/BUG修复 补丁号
+ '^','~'和'*','@'
    - '^X.Y.Z' 确定X,安装**最新**的版本
    - '~X.Y.Z' 确定X.Y,安装**最近**的版本
    - '*' 安装最新版本
    - '@' npm install xxx@X.Y.Z 指定版本更新
## package.json和package-lock.json
+ package.json文件记录了项目中需要的所有主模块  
    优点:别人通过package.json里面所记录的依赖, 进行包安装后直接运行项目   
+ package-lock.json文件锁定所有模块的版本号，包括主模块和所有依赖子模块
+ 为什么会出现package-lock.json?  
    当只有package.json时,别人clone下项目代码,但此时模块版本有所更新且主版本号一致,当他npm install后模块将被更新 这将影响代码功能  
    =>添加package-lock.json锁定所有模块版本  
    **只要package-lock.json和package.json模块版本号一致** npm install就只会根据package-lock.json内的模块版本和地址下载模块,会忽视package.json,**不会更新模块**  
    而只有package-lock.json和package.json模块版本号**不相同** 才会根据package.json内模块版本符号和版本号同时更新package-lock.json和package.json
+ 当package.json与package-lock.json都不存在，执行"npm install"时，只会生成package-lock.json文件，可以通过"npm init -y"来生成package.json文件
## package.json属性
1. name
    + 不能含有大写字母
    + 非url安全的字符不能使用
    + 不能以"_"或"."开头
    + 不要含有"js"和"node"
## request
+ 第三方请求模块 代替Node.js的http模块
+ 安装 npm i request -S (S需大写)
## inquirer
+ 命令行交互工具
+ 安装 npm i inquirer -S