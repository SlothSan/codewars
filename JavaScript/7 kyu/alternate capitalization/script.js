/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
  let evenCapitalize = "";
  let oddCapitalize = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenCapitalize += s[i].toUpperCase();
      oddCapitalize += s[i];
    } else {
      evenCapitalize += s[i];
      oddCapitalize += s[i].toUpperCase();
    }
  }
  return [evenCapitalize, oddCapitalize];
}
