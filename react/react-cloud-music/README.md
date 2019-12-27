## 路由配置
1. cnpm i react-router-dom react-router-config -S
2. 创建router/index.jsx
3. BlankLayout 全局的  
- renderRoutes
4. HomeLayout
- NavLink
## 数据流
1. cnpm i react-redux redux immutable redux-immutable redux-thunk -S 
- react-redux  
connect 生成容器组件  
Provider 给容器组件提供state
- redux  
createStore(reducer, preloadedState, enhancer): 
preloadedState在combineReducers时必须保持结构一致  
compose(...funcs) 组合 增强store  
applyMiddleware 中间件 包装dispatch
- immutable  
fromJS: 将数组转为List,将对象转为Map
- redux-immutable  
combineReducers：统一获取数据行为  
使用redux的combineReducers时：state.recommend.get('bannerList')  
使用redux-immutable的combineReducers时：state.getIn(['recommend','bannerList'])
- redux-thunk  
包装dispatch 支持函数
2. application/recommend/index
- React.memo  
高阶组件 作用类似PureComponent  
React.memo(component，compareFunc)