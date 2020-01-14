function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head // 空链表/单节点
  let pre = head, // 前驱节点
    cur = pre.next, // 当前节点
    next = cur.next // 后继节点
  while(cur) {
    cur.next = pre
    pre = cur
    cur = next
    next = cur ? cur.next : null
  }
  head.next = null
  return pre
};

let arr = [1,2,3,4,5]
let head = new ListNode(arr[0])
let p = head
for(let i = 1; i < arr.length; i++) {
  p.next = new ListNode(arr[i])
  p = p.next
}

let j = reverseList(head)
while(j) {
  console.log(j.val)
  j = j.next
}