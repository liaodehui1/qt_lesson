1. 
- 元素高度百分比相对于父级容器
- padding撑起元素高度，百分比相对于元素自身width
2. 类数组（arguments）转为真数组
- [...arguments]
- Array.prototype.slice.call(arguments, 0)
- Array.from(arguments)
3. [== 与 ===](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)

==：进行类型转换后比较  
- Object: ToPrimitive -> toString  
```js
[].toString() = '' ; 
Number('') = 0 ; 
Number(false) = 0 ;
```
```js
Number("[object Object]") = NAN
```
===: 即比较值也比较类型

4. if ([]) -> if (true)  
只要不是null undefined false 0 ''

5. [Event-loop](https://blog.csdn.net/qq_41681425/article/details/85775077)
- 执行完await后 await后面的代码需等待，会跳出async函数执行外面的代码
