Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.

1. 把香蕉表达一下，数据结构处理数据 .length H
[3,6,7,11] H=8
max=11 min=4
[30,11,23,4,20] H=5
30 
2. Max 规则 Max(arr)
3. Max-- 正好在H小时内吃完 >H 这个就找到
4. 怎么可以高效 二分查找

- js数据类型
    基础数据类型 整型 Number
    String Boolean
    Undefined Null
    Symbol
    复杂数据类型 Object
    [Array,Function,Math,Regexp,Date]
- Symbol
    每个Symbol实例都是唯一的
    1. 使用Symbol来作为对象属性名 Symbol类型的key是不能通过Object.keys()或者for...in来枚举的 
    2. 使用Symbol来替代常量值
    3. 私有属性

- ... spread 展开数组
    ... reset 收起

- while(1->Math.max(...plies))
    每把香蕉花的时间加起来 piles=>pile=>Math.ceil(pile/low)
- 减少写尝试