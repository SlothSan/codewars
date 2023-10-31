/*
Implement the method lastIndexOf (last_index_of in PHP and Python), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null/None and can hold any type of value.

Good luck!
*/

const lastIndexOf = (head, value) => {
  let index = -1;
  if (!head) {
    return index; // If the list is empty, return -1
  }
  let currentNode = head;
  let currentIndex = 0;
  while (currentNode) {
    if (currentNode.data === value) {
      index = currentIndex;
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return index;
};
