- html5 语义化
- 良好的html结构
- 取名
- 复用

- 路径 ../ 上一级 ./ 相对路径 / 绝对路径   web server
- 前端词汇量
    page content header footer
- 经典结构 h5语义化标签
    header+content+footer
- 弹性布局
    纵轴(flex-direction:column) + flex:1;
- 不要重复代码
- 到底以谁为设计稿 PSD 750px 375px retina
    200px 200/375*100%
- max-width + margin:0 auto 给我们带来移动设备到
    ipad,PC的扩展 碎片化的终端
- 移动端水平禁用滚动条，垂直方向
    overflow-scrolling:touch 滚动更顺滑
    -webkit 浏览器前缀 -ms -moz
    手机端 webkit safari android chrome
- input
    手指交互 35px
    border: 0;
    输入不要顶格 text-indent
    search 居中
    图标用背景做的 url base64 no-repeat 15px
    background-size
- browser-sync 实时刷新页面，不同设备(PC,手机，iPad)调试
    1. npm install -g browser-sync
    2. 查看版本 browser-sync --versiom
    3. 启动browser-sync，监听整个项目 
    browser-sync start --server --files "**/**.*"
    4. 手机访问 通过无线局域网地址

