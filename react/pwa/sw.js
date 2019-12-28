console.log('begin')
const CACHE_NAME = 'PWA_v1.0'

this.addEventListener('install', (event) => {
  console.log('安装成功')
  // cacheStorage 缓存内容
  // installed -> actived
  this.skipWaiting() // 自动跳过skipWaiting, 浏览器update on reload
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/Mantis.jpg',
          '/bundle.js',
          '/service-worker.html'
        ])
      })
  )
})

// 删除老版本
this.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        console.log(keyList)
        return Promise.all(keyList.map(key => {
          if(key !== CACHE_NAME) {
            return caches.delete(key)
          }
          return Promise.resolve()
        }))
      })
  )
})

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(res => {
        if(res) {
          return res
        }else { // 后续请求
          return fetch(event.request)
            .then(res => {
              return caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, res)
                  return res
                })
            })
        }
      })
  )
})
// 监听浏览器请求事件
