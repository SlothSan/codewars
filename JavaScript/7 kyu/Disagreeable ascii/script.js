/* 
You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.

Normally in ascii

a has a value of 97
A has a value of 65
' ' has a value of 32
0 has a value of 48
To find who has the 'weightier' name you will switch all the values so:

A will be 97
a will be 65
' ' will be 0
0 will be 0
etc...
For example Joe will have a weight of 254, instead of 286 using normal ascii values.


*/

const getWeight = (name) => {
  let weight = 0;

  for (let i = 0; i < name.length; i++) {
    let charCode = name.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      weight += charCode + 32;
    } else if (charCode >= 97 && charCode <= 122) {
      weight += charCode - 32;
    }
  }

  return weight;
};

console.log(getWeight("Joe")); //254
