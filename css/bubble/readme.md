## text-align
+ 作用于行内元素/行内块状元素
## appearance
+ 使元素呈现为标准的用户界面元素
+ 如按钮、菜单、文本输入框、单选按钮、多选按钮、列表等等
+ 所有主流浏览器都不支持它
+ 使用-moz-appearance/-webkit-appearance
## outline
+ 元素轮廓 不占空间
## :和::
+ :用于伪类
    - 基于的是当前元素处于的**状态**
    - :link,:visited,:hover,:active(爱恨原则LVHA) :focus(用于键盘焦点) :first-child :lang(中文:zh/英文:en 用于元素带有指定lang)  
+ ::用于伪元素
    - ::before,::after,::first-letter(作用于元素文本第一个字),::first-line
## css 选择器
+ 'div p'=>选择`<div>`元素内部的所有`<p>`元素
+ 'div>p'=>选择以`<div>`元素为父元素的内部所有`<p>`元素
+ 'div+p'=>选择紧邻`</div>`元素的后部`<p>`元素
+ '~=','|='和'*=','^=','$='
    - '~='和'*='的区别
        * '~='要求属性值中包含独立单词value
        * '*='只要求属性值内有子串值等于value
    - '|='和'^='的区别
        * '|='要求属性值像'value ...'或'value-etc ...'
        * '^='只要求开头子串值为value
    - '$=' 结尾子串为value
+ ul~p 选择`</ul>`后的每一个`<p>`元素
+ :first-child和:first-of-type，:last-child和:last-of-type，:only-child和:only-of-type，:nth-child(n)和:nth-of-type(n)，:nth-last-child(n)和:nth-last-of-type(n)
    - p:first-child和p:first-of-type的区别
        * p:first-child要求`<p>`元素必须是父容器内的第一个子元素(`<p>`元素必须紧挨父元素起始标签)
        * p:first-of-type只需要父容器内存在`<p>`元素且不需要`<p>`元素在第一位
    - p:last-child和p:last-of-type的区别
        * p:last-child要求`<p>`元素必须是父容器内的最后一个子元素
        * p:last-of-type只需要父容器内存在`<p>`元素且不需要`<p>`元素在最后一位
    - p:only-child和p:only-of-type的区别
        * p:only-child要求`<p>`元素是唯一的子元素，不允许有其他子元素
        * p:only-of-type只要求`<p>`是父容器内唯一的`<p>`元素，可以有其他子元素
    - p:nth-child(n)和p:nth-of-type(n)的区别
        * p:nth-child(n)要求第一个`<p>`元素至少是父容器的第n位的子元素
        * p:nth-of-type(n)取子元素中的第n个`<p>`元素
    - :nth-last-child(n)和:nth-last-of-type(n)的区别
        * p:nth-last-child(n)要求倒数第一个`<p>`元素至少是父容器的倒数第n个子元素
        * p:nth-last-of-type(n)取倒数第n个`<p>`元素
+ p:empty 选择没有子元素的p元素
+ #news:target id为news的元素为当前活动的锚点
    - 当点击`<a href="#news"></a>`元素时显示样式
+ :enabled，:disabled和:checked
    - input:enabled 选择input的disabled属性值不为disabled的元素
    - input:disabled 选择input的disabled属性值是disabled的元素
    - input:checked 选择input的disabled属性值是disabled的元素
    - input:checked 选择每个被选中的元素
+ \[属性名/属性名="value"\] 选择包含此属性名的所有元素或包含此属性名且属性值=value的所有属性
+ :not(selector) 过滤掉指定元素/符合选择器的每个元素
    - 元素 :not(p)
    - 选择器 :not([name]) 选择不包含name属性的元素
+ ::selection 对被选择元素中的文本添加样式，不会波及子元素内的文本
    - css:color,background
    - 设置文字不可选中 user-select: none;
## css 函数
+ cale()函数
    - 动态计算长度值
    - 运算符左右需要空格，否则函数没用
+ attr()函数
    - attr(attribute-name) 返回属性值
