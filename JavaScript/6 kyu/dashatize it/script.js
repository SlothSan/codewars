/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each 
odd integer, but do not begin or end the string with a dash mark. 
If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/
const removeSignAndCreateArray = (num) => {
  num = Math.abs(num);
  return (num = Array.from(String(num), Number));
};

const dashatize = (num) => {
  //get 'em
  //if num is not int return "NaN"
  if (typeof num !== "number") {
    return "NaN";
  }
  //Remove sign.
  num = removeSignAndCreateArray(num);
  console.log(num);
  //Loop through num if current digit is odd and not first or last add - on either side of digit.
  for (let i = 0; i < num.length; i++) {
    if(num[i] % 2 !== 0) {
        console.log(`Odd at ${i}`);
    }
  }
};

dashatize(-12321);
