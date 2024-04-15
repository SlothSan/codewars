/*
Linked Lists - Alternating Split

Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.

var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
alternatingSplit(list).first === 1 -> 3 -> 5 -> null
alternatingSplit(list).second === 2 -> 4 -> null

For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().

If the passed in head node is null/None/nil or a single node, throw an error.

Related Kata in order of expected completion (increasing difficulty):
 Linked Lists - Push & BuildOneTwoThree
 Linked Lists - Length & Count
 Linked Lists - Get Nth Node
Linked Lists - Insert Nth Node
Linked Lists - Sorted Insert
Linked Lists - Insert Sort
Linked Lists - Append
Linked Lists - Remove Duplicates
Linked Lists - Move Node
Linked Lists - Move Node In-place
Linked Lists - Alternating Split
Linked Lists - Front Back Split
Linked Lists - Shuffle Merge
Linked Lists - Sorted Merge
Linked Lists - Merge Sort
Linked Lists - Sorted Intersect
Linked Lists - Iterative Reverse
Linked Lists - Recursive Reverse

Inspired by Stanford Professor Nick Parlante's excellent Linked List teachings.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (head === null || head.next === null) {
    throw new Error("Invalid input: The list must have at least two nodes");
  }

  let current = head;
  let first = new Node(null); // dummy node for the first list
  let second = new Node(null); // dummy node for the second list
  let firstTail = first;
  let secondTail = second;
  let alternate = true;

  while (current !== null) {
    if (alternate) {
      firstTail.next = current;
      firstTail = firstTail.next;
    } else {
      secondTail.next = current;
      secondTail = secondTail.next;
    }
    alternate = !alternate;
    current = current.next;
  }

  firstTail.next = null;
  secondTail.next = null;

  return new Context(first.next, second.next);
}
