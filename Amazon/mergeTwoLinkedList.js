// Given two sorted linked lists, merge them so that the resulting linked list is also sorted. Consider two sorted linked lists and the merged list below them as an example.

const mergeTwoSortedLinkedList  = (head1, head2) =>{

if (!head1) {
    return head2;
} else if (!head2) {
    return head1;
}


// the initial head;
  let dummy = new ListNode(-1);
  let head = dummy;
  if(head1.val<head2.val){
    head = head1;
    head1= head1.next;
  }else{
    head = head2;
    head2 = head2.next;
  }
  
  while(head1!==null && head2!==null){
    if(head1.val<head2.val){
      dummy.next = head1;
      head1 = head1.next
    }else{
       dummy.next = head2;
       head2 = head2.next;
    }
    dummy = dummy.next
  }

  if(head1==null){
     dummy.next = head2
  }else{
    dummy.next = head1
  }

  return head.next;

}