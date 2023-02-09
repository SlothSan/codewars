/* Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not . */

const disariumNumber = (n) => {
  let sum = 0;
  for (let i = 0; i < String(n).split("").length; i++) {
    sum += Math.pow(String(n).split("")[i], i + 1);
  }
  return sum === n ? "Disarium !!" : "Not !!";
};

console.log(disariumNumbers(89));
