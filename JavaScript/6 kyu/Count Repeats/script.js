/*
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/

const countRepeats = (str) => {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i] !== str[i - 1]) {
      continue;
    } else {
      count++;
    }
  }
  return count;
};

console.log(countRepeats("AaBBCCC")); //4
