/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

const solve = (str) => {
  const arr = str.split("");
  const result = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      result[i] = " "; // Keep the space at its original index
    }
  }
  let j = result.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      while (result[j] !== undefined) {
        j--;
      }
      result[j] = arr[i];
    }
  }

  return result.join("");
};

console.log(solve("I love rockpool digital")); //l atig idloopkc orevolI
