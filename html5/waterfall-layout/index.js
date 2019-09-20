(function () {
  // 隔离防污染
  function Waterfall(option) {
    this.container = option.container
    this.number = option.number // 一次性渲染多少张图片
    this.width = option.container.clientWidth
    this.init()
  }
  Waterfall.prototype.init = function () {
    const imgList = document.getElementsByTagName('img')
    const perNum = this.getPerNum()
    let heights = []
    // 获取第一行图片高度
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight)
    }
    for (let i = perNum; i < imgList.length; i++) {
      let minIndex = this.getMinIndex(heights)
      imgList[i].style.position = 'absolute'
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`
      imgList[i].style.top = `${heights[minIndex]}px`

      //更新高度
      heights[minIndex] += imgList[i].offsetHeight
    }
    this.heights = heights
    let maxHeight = Math.max(...heights)
    this.container.setAttribute('style', `height:${maxHeight}px`)
  }
  Waterfall.prototype.getMinIndex = function (heights) {
    const min = Math.min(...heights)
    return heights.findIndex(e => e === min)
  }
  Waterfall.prototype.getPerNum = function () {
    const imgList = document.getElementsByTagName('img')
    const singleWidth = imgList[0].offsetWidth
    return Math.floor(this.width / singleWidth)
  }
  Waterfall.prototype.append = function (fragment) {
    this.container.appendChild(fragment)
    const imgList = document.getElementsByTagName('img')
    const imgFromFrag = Array.prototype.slice.call(imgList, -10)
    let heights = this.heights
    for (let i = 0; i < imgFromFrag.length; i++) {
      let minIndex = this.getMinIndex(heights)
      imgFromFrag[i].style.position = 'absolute'
      imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px`
      imgFromFrag[i].style.top = `${heights[minIndex]}px`

      //更新高度
      heights[minIndex] += imgFromFrag[i].offsetHeight
    }
    this.heights = heights
    let maxHeight = Math.max(...heights)
    this.container.setAttribute('style', `height:${maxHeight}px`)
  }
  window.Waterfall = Waterfall
})()

// console.log(Waterfall)