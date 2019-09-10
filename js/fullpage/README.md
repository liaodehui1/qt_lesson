## fullpage
+ css 处理
  - 某个盒子里的所有子元素占据一页
  - 事件onscroll很多次 节流
  - tansform tansition
  - 面向对象 
+ jquery API $() 怎么实现？
  - $(fn) 原生js也是有生命周期（vue）的，我们叫他事件
  - js是基于事件的脚本语言 找对的生命周期
  - $('.container') querySelector方法
  - typeof 参数 function 走分支
  - .find() 查找 querySelector
  - .css(cssname,val) .height()
  - vue 统统没有 mvvm 尽量减少DOM编程 querySelector ... 
  - css DOM的查找，执行 都是要花内存的 vue可以优化他
+ vue 生命周期 js 事件
  - .innerHTML css width()
  ```js
  <template>
    <div :width="width">
      {{content}}
    </div>
  </template>
  ```