/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

const incrementString = (string) => {
  if (!/[0-9]/.test(string)) return string + "1";
  string = string.split(/(\d+)/g);
  string.pop();
  let length = string[string.length - 1].length;
  let number = Number(string[string.length - 1]);
  number++;
  string[string.length - 1] = String(number).padStart(length, "0");
  return string.join("");
};

// console.log(incrementString("foo")); //foo1
// console.log(incrementString("foobar1000")); //foobar1001
console.log(incrementString("foo100obar99")); //foobar001
