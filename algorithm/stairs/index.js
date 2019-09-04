var map = new Map()//缓存
function f(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    if (map.has(n)) {
        return map.get(n);
    }

    var ret = f(n - 1) + f(n - 2);
    map.set(n, ret);
    return ret;
}
//内存溢出
// 7->6+5 6->5+4 5重复计算
console.log(f(99))