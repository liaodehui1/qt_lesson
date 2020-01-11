function ListNode (val) {
  this.val = val
  this.next = null
}

var removeDuplicates = function(nums) {
  let p = head = new ListNode(nums[0])
  for(let i = 1; i < nums.length; i++) {
    p.next = new ListNode(nums[i])
    p = p.next
  }
  
  p = head
  while(p.next) {
    if(p.next.val === p.val) {
      p.next = p.next.next
    }else {
      p = p.next
    }
  }
  // console.log(head)
  let size = 0
  p = head
  while(p) {
    size++
    p = p.next
  }
  return size
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))