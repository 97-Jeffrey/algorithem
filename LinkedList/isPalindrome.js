// Given the head of a singly linked list, return true if it is a palindrome.

isPalindrome = (head)=>{
  let fast = head;
  let slow = head;

  while(fast!==null && fast.next!==null){
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = head;
  slow = reverse(slow);

  while(slow!==null){
    if(fast.val!== slow.val){
      return false
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;

}

const reverse = (head) =>{
  let previous = null;
  let next = null;

  while(head!==null){
    next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }

  return previous;

}