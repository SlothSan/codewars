/*
You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.
Examples

'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
*/

const reverseSlice = (str) => {
  let result = [];
  for (let i = str.length; i > 0; i--) {
    result.push(str.slice(0, i).split("").reverse().join(""));
  }
  return result;
};

console.log(reverseSlice("HelloWorld"));
/*
[
  'dlroWolleH', 'lroWolleH',
  'roWolleH',   'oWolleH',
  'WolleH',     'olleH',
  'lleH',       'leH',
  'eH',         'H'
]
*/
