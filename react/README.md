# React
## 脚手架
1. 安装 cnpm i create-react-app -g
2. 创建项目 create-react-app 项目名称
## 路由
1. 安装 cnpm i react-router-dom -S
2. 使用 react-router-juejin
3. 路由传参 react-cnode/src/Topic 
```js
// 使用高阶组件withRouter包裹要导出的组件 才能获取到props
import {withRouter} from 'react-router-dom'
// 只能把props给包裹的第一层
withLoading(withRouter(Topic))
```
## 配置暴露
+ 为了使用es7 @注解
+ yarn eject 与git冲突
```js
// package.json 里面的 babel 添加
  "plugins":[
    [
      "@babel/plugin-proposal-decorators", 
      { "legacy" : true }
    ]
  ]
// 安装"@babel/plugin-proposal-decorators -D
```

## 组件通信
### Context
1. 创建Context React.createContext()
2. 使用Provider 包裹子组件 value为共享值
3. 子组件使用Consumer 包裹需要使用值得dom

## store
### redux
+ 单向数据流
+ dispatch、action、reducer、store
### react-redux
+ store、view

## immutable
+ 安装包 immutable
## css in js
+ 安装包 styled-components

## 其他
### 导入导出
1. name export
+ 非解构，* 将收纳默认导出和命名导出
2. es module -> commonJS