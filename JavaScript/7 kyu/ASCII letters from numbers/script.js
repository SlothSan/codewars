/*
You have to create a function that converts integer given as string into ASCII uppercase letters.

All ASCII characters have their numerical order in table.

For example,

from ASCII table, character of number 65 is "A".
Numbers will be next to each other, So you have to split given number to two digit long integers.

For example,

'658776' to [65, 87, 76] and then turn it into 'AWL'.
Good Luck!
*/

const convert = (number) =>
  number
    .match(/[0-9]{2}/g)
    .map((num) => {
      return String.fromCharCode(num);
    })
    .join("");

console.log(convert("73327673756932858080698267658369")); //I LIKE UPPERCASE
