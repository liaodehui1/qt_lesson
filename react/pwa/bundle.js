document.getElementById('app')
.innerHTML = 'world'

setTimeout(() => {
  fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=beauty')
    .then(res => res.json)
    .then(res => {
      console.log(res)
    })
}, 3000)