/*
Hi! Welcome to my first kata.

In this kata the task is to take a list of integers and a key, and group the list according to a simple rule: ints greater than or equal to the key, and ints less than the key.

You are to return a nested list. If the list is empty, simply return an empty list.

Confused? Okay, let me walk you through an example...

The input is: [1, 1, 1, 0, 0, 6, 10, 5, 10], the key is: 6
Okay so the first five numbers are less than the key, 6, so we group them together.

[1, 1, 1, 0, 0]
The next two numbers, 6 & 10, are both >= 6 to they belong in a separate group, which we will add to the first group. Like so:

[[1, 1, 1, 0, 0], [6, 10]]
The next two numbers are 5 & 10. Since the key is 6 these two numbers form separate groups, which we will add to the previous result. like so:

[[1, 1, 1, 0, 0], [6, 10], [5], [10]]
And voila! We're done.

Here are a few more basic examples:

group_ints([1, 0], key= 0)  
--> [[1,0]]

group_ints([1, 0, -1, 5], key= 0) 
--> [[1, 0], [-1], [5]]

group_ints([1, 0, -1, 5], key= 5) 
--> [[1, 0, -1], [5]]
Good luck guys/gals!
*/

const groupInts = (lst, key) => {
  if (!lst.length) {
    return [];
  }

  let groups = []; // To hold the resulting nested list
  let tempGroup = [];

  for (let num of lst) {
    if (
      tempGroup.length &&
      ((num >= key && tempGroup[0] < key) || (num < key && tempGroup[0] >= key))
    ) {
      groups.push(tempGroup);
      tempGroup = [];
    }

    tempGroup.push(num);
  }

  if (tempGroup.length) {
    groups.push(tempGroup);
  }

  return groups;
};

console.log(groupInts([1, 2, 3], 3));
//[ [ 1, 2 ], [ 3 ] ]
