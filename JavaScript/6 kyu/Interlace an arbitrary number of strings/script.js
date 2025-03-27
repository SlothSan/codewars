/*
Write a function that takes an arbitrary number of strings and interlaces them (combines them by alternating characters from each string).

For example combineStrings('abc', '123') should return 'a1b2c3'.

If the strings are different lengths the function should interlace them until each string runs out, continuing to add characters from the remaining strings.

For example combineStrings('abcd', '123') should return 'a1b2c3d'.

The function should take any number of arguments and combine them.

For example combineStrings('abc', '123', '£$%') should return 'a1£b2$c3%'.

Note: if only one argument is passed return only that string. If no arguments are passed return an empty string.


*/

const combineStrings = (...strings) => {
  let res = "";
  if (!strings.length) return res;
  if (strings.length === 1) return strings[0];

  const maxLength = Math.max(...strings.map((str) => str.length));

  for (let i = 0; i < maxLength; i++) {
    for (const str of strings) {
      if (i < str.length) {
        res += str[i];
      }
    }
  }

  return res;
};

console.log(combineStrings("123", "abc", "!£$%")); //1a!2b£3c$%
