/* 
In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.

Good luck!
*/

const solve = (a, b) => {
  const map1 = new Map();
  for (const char of a) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }
  const map2 = new Map();
  for (const char of b) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  let removals = 0;

  for (const [char, count] of map1) {
    if (map2.has(char)) {
      if (count > map2.get(char)) {
        removals += count - map2.get(char);
      }
    } else {
      removals += count;
    }
  }

  for (const [char, count] of map2) {
    if (!map1.has(char) || map1.get(char) < count) {
      return 0; // Impossible to transform s1 into s2
    }
  }

  return removals;
};

console.log(solve("abcxyz", "ayxz")); //2
