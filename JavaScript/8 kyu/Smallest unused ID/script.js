/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

const nextId = (ids) => {
  let i = 0;
  while (ids.includes(i)) {
    i++;
  }
  return i;
};

console.log(nextId([0, 1, 2, 3, 5])); //4
