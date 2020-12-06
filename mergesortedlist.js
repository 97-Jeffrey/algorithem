function ListNode(val,next = null){
  this.val = val;
  this.next = next
}
let l1 = new ListNode(1);
console.log(l1.val)

const  mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let head =dummy;
     while(l1 !== null && l2 !== null){
         if(l1.val <= l2.val){
            dummy.next = l1;
             l1 = l1.next;
       } else{
           dummy.next = l2;
           l2 = l2.next;
       }
         dummy = dummy.next;
     }
     
     if(l1 !== null ){
        dummy.next = l1;
        }else{
            dummy.next =l2;
        }
     return head.next
 };

console.log(mergeTwoLists([],[]))
console.log(mergeTwoLists([1],[]))
console.log(mergeTwoLists([],[1,2,3,4,5]))
console.log(mergeTwoLists([1,2,4], [1,3,4]))