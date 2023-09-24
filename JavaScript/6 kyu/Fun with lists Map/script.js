/*
Implement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head) where every element is the result of applying the given mapping method to each element of the original list.

For example: Given the list: 1 -> 2 -> 3, and the mapping function x => x * 2, map should return 2 -> 4 -> 6

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

const map = (head, f) => {
  if (!head) {
    return null;
  }

  const newHead = new Node(f(head.data));
  let current = newHead;
  let currentOriginal = head.next;

  while (currentOriginal) {
    current.next = new Node(f(currentOriginal.data));
    current = current.next;
    currentOriginal = currentOriginal.next;
  }

  return newHead;
};

console.log(map(new Node(1, new Node(2, new Node(3))), (x) => x * 2));

/*
Node {
  data: 2,
  next: Node { data: 4, next: Node { data: 6, next: null } }
}
*/
