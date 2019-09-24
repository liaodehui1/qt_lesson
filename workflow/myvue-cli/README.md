## 手写vue-cli
- npm install -g vue-cli 安装？ 发布到npm应用市场
- vue init webpack
  + vue npm包
  + myvue-cli 注册到 npm config ls -l preix -> npm link 
  + vue 全局的npm包 init command
  + webpack 参数1 process.argv[3] process.argv[4] 项目名
  + 脚手架
  + github 模板拉下来 npm包可以做
  + 在下载中... 进度条...
  + 完成 异步 Promise async await 来解决
- es6转成es5
  + stylus -> css
  + workflow 工作流 前端现在的一类岗位
  + babel 现代js 新的特性快速来到开发中心的核心 通过他的插件来降级或打补丁
  + polyfill import
    ```js
    const a = 1; /src

    var a = 1; /dist
    ```
  + babel-cli babel-core babel-preset-env(预处理) babel-plugin-transform-runtime
    * /src 开发目录
    * /dist 结果目录
    * npm run compile  