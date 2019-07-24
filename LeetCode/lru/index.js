/**
 * 最近最少使用
 * @param {number} capacity 
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.arr = [] //数据结构
    // 使用空间 arr.length
    // this.obj={}
}

LRUCache.prototype.get = function (key) {
    //调整优先级
    let index = this.arr.findIndex(ele => {
        return ele.key === key
    })
    if(index!==-1){
        let item = this.arr.splice(index, 1)
        this.arr.push(item[0])
        return item[0].value
    }else{
        return -1;
    }
    
}

LRUCache.prototype.put = function (key, value) {
    //this.arr.push(this.obj) 错误 以下修改obj导致数组内部项改变
    // this.obj.key=key
    // this.obj.value=value
    if (this.arr.length!==0&&this.arr.findIndex(ele => { return ele.key === key }) 
    !== -1) {
        this.get(key)
        this.arr[this.arr.length-1].value=value
    } else {
        if (this.arr.length === this.capacity) {
            this.arr.shift()
        }
        this.arr.push({ 'key': key, 'value': value })
    }
}

var cache = new LRUCache(2)
cache.put(2, 1)
cache.put(2,2)
cache.get(2)
cache.put(1,1)
cache.put(4,1)
console.log(cache.get(2))
// [1,2] 在哪端是最近最常用的? Push
// get(1) 从原来的数组里移除，push到队尾，不会带来空间使用量增加
// [2,1]
// push(3) 带来空间的分配 回收空间 最近最少使用(length>=容量 shift)