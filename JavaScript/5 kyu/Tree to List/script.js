/* 
Given the root of a tree with an arbitrary number of child nodes, return a list containing the nodes' data in breadth-first order (left to right, top to bottom).

Child nodes are stored in a list. An empty tree is represented by an empty list.

Example:

           1
          / \
         2   3  -> [1,2,3,4,5,6,7]
        /|\   \
       4 5 6   7
*/

//Preloaded node definition
class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

const treeToArray = (tree) => {
  if (!tree || tree.length === 0) {
    return [];
  }

  const result = [];
  const queue = [tree];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.data);
    if (node.children) {
      queue.push(...node.children);
    }
  }

  return result;
};

const tree = new Node(1, [
  new Node("a", [new Node("A"), new Node("B")]),
  new Node("b", [new Node("C"), new Node("D", [new Node(null)])]),
]);

console.log(treeToArray(tree));

/*
[
  1,   'a',  'b',
  'A', 'B',  'C',
  'D', null
]
*/
