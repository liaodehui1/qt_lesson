/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

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

// var partition = function(head, x) {
//   if (!head) return null // [] 0
//   if (!head.next) return head // [1] 1
//   let q = head, i = null
//   while(q && q.val < x) {
//     i = q
//     q = q.next
//   }
//   if(!q) return head // [1, 1] 3
//   let k = q
//   q = q.next
//   while(q) {
//     if(q.val < x) {
//       let temp = new ListNode(q.val)
//       k.next = q.next
//       if(i) { // [1,4,3,2,5,2] 3
//         temp.next = i.next
//         i.next = temp
//       }else { // [6,4,3,2,5,2] 3
//         temp.next = head
//         head = temp
//       }
//       i = temp
//     }else {
//       k = q
//     }
//     q = q.next
//   }
//   return head
// };

var partition = function(head, x) {
  if (!head) return null // [] 0
  if (!head.next) return head // [1] 1
  let q = head, i = null
  while(q && q.val < x) {
    i = q
    q = q.next
  }
  if(!q) return head // [1, 1] 3
  let k = q
  q = q.next
  while(q) {
    if(q.val < x) {
      k.next = q.next
      if(i) {
        q.next = i.next
        i.next = q
      }else {
        q.next = head
        head = q
      }
      i = q
      q = k.next
    }else {
      k = q
      q = q.next
    }
  }
  return head
};

let j = partition(head, 3)

while(j) {
  console.log(j.val)
  j = j.next
}