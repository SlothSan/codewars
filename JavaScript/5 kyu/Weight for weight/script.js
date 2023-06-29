/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/

const orderWeight = (strng) => {
  let numbers = strng.trim().split(/\s+/);
  numbers.sort(function (a, b) {
    let weightA = getWeight(a);
    let weightB = getWeight(b);
    if (weightA === weightB) {
      return a.localeCompare(b);
    }
    return weightA - weightB;
  });
  return numbers.join(" ");
};

const getWeight = (str) => {
  let digits = str.split("");
  return digits.reduce((acc, curr) => acc + parseInt(curr), 0);
};
console.log(
  orderWeight(
    "296151 76 492305 90 59876 16 334576 45 142849 154 196091 132 265391 123 227045 196 460413 49 397656 155 47"
  )
);

//123 132 16 45 90 154 155 47 49 76 196 460413 227045 492305 296151 196091 265391 142849 334576 59876 397656
