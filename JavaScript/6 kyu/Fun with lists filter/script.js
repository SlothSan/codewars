/*
Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null.

Good luck!
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function filter(head, predicate) {
  if (!head) {
    return null;
  }

  let current = head;
  let newHead = null;
  let newTail = null;

  while (current) {
    if (predicate(current.data)) {
      if (!newHead) {
        newHead = newTail = new Node(current.data);
      } else {
        newTail.next = new Node(current.data);
        newTail = newTail.next;
      }
    }
    current = current.next;
  }

  return newHead;
}

console.log(filter(new Node(1, new Node(2, new Node(3))), (x) => x <= 2));
//Node { data: 1, next: Node { data: 2, next: null } }
