function ListNode(val) {
  this.val = val;
  this.next = null;
}

let arr = [1,4,3,2,5,2]
let head = p = new ListNode(arr[0])
for(let i = 1; i < arr.length; i++) {
  p.next = new ListNode(arr[i])
  p = p.next
}

var partition = function(head, x) {
  let smaller = dymmySmaller = new ListNode(-1)
  let greater = dymmyGreater = new ListNode(-1)
  while(head) {
    // console.log(head.val)
    // 链表遍历
    // head动态
    if(head.val < x) {
      smaller.next = head // 进入较小分区
      smaller = smaller.next // 更新small
    }else {
      greater.next = head
      greater = greater.next
    }
    head = head.next
  }
  // 两个分区合并
  smaller.next = dymmyGreater.next
  greater.next = null 
  return dymmySmaller.next
}

let j = partition(head, 3)

while(j) {
  console.log(j.val)
  j = j.next
}