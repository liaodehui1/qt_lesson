# React
## 脚手架
1. 安装 cnpm i create-react-app -g
2. 创建项目 create-react-app 项目名称
## 路由
1. 安装 cnpm i react-router-dom -S
2. 使用 react-router-juejin
+ Link 路由跳转 类vue的RouterLinkTo
+ Router 类vue的RouterView
+ Redirect 重定向
3. 路由传参 react-cnode/src/Topic 
```js
// 使用高阶组件withRouter包裹要导出的组件 才能获取到props
import {withRouter} from 'react-router-dom'
// 只能把props给包裹的第一层
withLoading(withRouter(Topic))
```
4. 路由拦截 react-jianshu/src/lib/PrivateRoute
5. BrowerRouter和HashRouter
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
1. dispatch 
### react-redux
+ store、view

## immutable
+ 安装包 immutable
## css in js
+ 安装包 styled-components

## hooks
+ 包装地狱 react-xxx(reactRouter(connect(App)))
### useState
+ 创建state
+ 传入默认值 返回state和set-xxx方法
### useMemo
+ 类vue的computed
+ 第一个函数返回值作为useMemo返回的值
+ 第二个参数作为执行依据
### useCallback
+ shouldComponentUpdate 时期执行
+ 参数决定是否执行
### useEffect
+ 模拟生命周期
```js
useEffect(() => {
  //componentDidMount和componentDidUpdate周期的函数体
  return ()=>{ 
  //componentWillUnmount周期的函数体
  }
})
```
+ 如果第二个参数为空数组,将只会在 mount 和 unmount 时期执行
```js
useEffect(() => {
  //仅在componentDidMount的时候执行
},[]);
```
+ 第二个参数作为执行依据
```js
useEffect(() => {
  //仅在componentDidMount的时候执行
  //只有stateName\props.id的值发生改变
},[stateName,props.id]);
```
### useReducer
+ 创建store
+ 第一个参数为reducer函数,第二个参数为默认store
+ 数组返回值 第一个为store,第二个为dispatch
## 其他
### 导入导出
1. name export
+ 非解构，* 将收纳默认导出和命名导出
2. es module -> commonJS