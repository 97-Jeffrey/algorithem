/* 
   Given the head of a singly linked list, return the middle node of the linked list.

   If there are two middle nodes, return the second middle node. 
*/

const middle = head =>{
    let fast = head;
    let slow = head;

    while(fast && fast.next){
       fast = fast.next.next;
       slow = slow.next
    }

    return slow
}