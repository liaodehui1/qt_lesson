# 206 反转链表
## 通过前驱节点及后继节点的概念，使用遍历
当前节点的next指向他的前驱节点  
之前的前驱节点变为当前节点  
当前节点变为原节点的后继节点  
如果当前节点为null，完成遍历
## 递归
- 把复杂的类似问题变为简单的重复
- 退出条件 null