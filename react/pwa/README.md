## PWA
1. 离线访问  
cacheStorage + service-work
2. 桌面入口  
manifest.json
3. 发送通知  
Notification

## web-worker
js单线程：  
能让js代码运行在另外一个线程之中

## cacheStorage
1. 除非明确地更新缓存，否则缓存不会被更新；除非删除，否则永不过期
2. 一个域下浏览器限制了缓存数据的大小

## 更新
- sw.js:  
install -> cache.addAll  
fetch -> cache.match
- 不是每次刷新，service-worker都会重新执行 install->actived  
如果内容变了 install -> skipWaiting -> actived  
skipWating 会等着，如果把页面关了再打开才会变为actived