/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

const solve = (s) => {};

console.log(solve(""), [0, 0, 0, 0]);
console.log(solve("aAbBcC"), [3, 3, 0, 0]);
console.log(solve("Codewars@codewars123.com"), [1, 18, 3, 2]);
console.log(solve("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2]);
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9, 9, 6, 9]);
