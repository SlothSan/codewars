/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

const count = (regex, string) => {
  return ((string || "").match(regex) || []).length;
};

const solve = (string) => {
  return [
    count(/([A-Z])/g, string),
    count(/([a-z])/g, string),
    count(/([0-9])/g, string),
    count(/([^A-Za-z0-9])/g, string),
  ];
};

console.log(solve(""));
console.log(solve("aAbBcC"));
console.log(solve("Codewars@codewars123.com"));
console.log(solve("bgA5<1d-tOwUZTS8yQ"));
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));
