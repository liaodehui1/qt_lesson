function ListNode (val) {
  this.val = val
  this.next = null
}

// 遍历
// var reverseList = function(head) {
//   if (!head || !head.next) return head // 空链表/单节点
//   let pre = null, // 前驱节点
//     cur = head // 当前节点
//   while(cur) {
//     const next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// };

// 递归
var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }else {
    let newHead = reverseList(head.next) // 新的头节点
    head.next.next = head
    head.next = null
    return newHead
  }
}

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