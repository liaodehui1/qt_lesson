- js 变量或常量 内存中声明了地址 名字就是地址别称
    常量一定要赋值 变量可以不赋值，类型可改变
    1. js 弱类型
    2. 变量类型是由值决定的
    3. 常量在声明时，一定要确定类型
        类型不可变 值可以变
    4. 数组 前面(队头) 后面(队尾) 添加 移除 push pop    unshift shift
    5. 简单类型的常量 值也不可以改变
## 数组find/findIndex
- find 返回符合条件的项 不存在返回undefined
- findIndex 返回符合条件的项的索引 不存在返回-1
## 数组slice/splice
- slice(start,over可选) 返回start到(over-1)的所有项组成的一个数组 不影响原数组
- splice
    1. 删除 splice(start,num) 返回从start开始的num项组成的数组 影响原数组
    2. 插入 splice(start,0,item) 从start后开始插入item(可多项) 返回空数组
    3. 替换 splice(start,num,item) 先删除num项，再插入item 返回删除项组成的数组