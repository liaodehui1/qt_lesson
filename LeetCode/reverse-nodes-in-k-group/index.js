function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

let arr = [1,2,3,4,5]
let head = new ListNode(arr[0])
let p = head
for(let i = 1; i < arr.length; i++) {
  p.next = new ListNode(arr[i])
  p = p.next
}
let k = 2

// 一次翻转
var reverse = function (start, end) {
  let cur = start.next // 1开始
  let pre = start // 前驱节点
  let first = cur // 反转后成为下一组的头节点
  while(cur != end) {
    let temp = cur.next // 下一个节点
    cur.next = pre
    pre = cur // 前驱节点变为当前节点
    cur = temp // 当前节点变为下一个节点
  }
  start.next = pre // pre变为了小组链表头节点，dummy.next = pre
  first.next = cur // 1变为尾结点，需要指向3
  return first
}

var reverseKGroup = function(head, k) {
  if (!head || k === 1) {
    return head
  }
  let dummy = { //哨兵节点
    next: head
  }
  let start = dummy
  let end = head
  let count = 0
  while(end) {
    count++
    if (count % k === 0) { // 整除 要反转
      start = reverse(start, end.next) // 小组反转，反转之后的小组要连上上一个小组
      end = start.next
    }else {
      end = end.next
    }
  }
  return dummy.next  
};

let j = reverseKGroup(head, k)
while(j) {
  console.log(j.val)
  j = j.next
}

