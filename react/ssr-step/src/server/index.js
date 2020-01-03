import React from 'react';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import render from './render';
import routes from '../routers';
import {getServerStore} from '../store/index';

/**
 * 构建在 虚拟 dom 之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * 
 * MVVM / dom diff
 * react: react-native
 * vue:   weex
 */


const app = new express();

// 前端打包完的 静态资源
app.use(express.static('public'));
/**
 * 渲染html之前保证redux有数据
 * 1. 拿到当前访问的url命中的组件
 * 2. 拿到组件上面的loadData
 * 3. 一个个dispatch拿到数据
 */
let promises = []
app.get('*', (req, res) => {
  const store = getServerStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  // console.log('>>>>', )
  matchedRoutes.forEach(mRouter => {
    if(mRouter.route.loadData) {
      promises.push(mRouter.route.loadData(store))
    }
  })
  Promise.all(promises)
    .then(resArr => {
      const html = render(req,store);
      res.send(html)
    })
    .catch(err => {
      console.log('服务端出错：', err)
    })
})
app.listen(3000, () => {
  console.log('server is running 3000');
})