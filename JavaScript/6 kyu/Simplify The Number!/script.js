/*
Task
Given a positive integer as input, return the output as a string in the following format:

Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.

Examples
Input	Output
0	""
56	"5*10+6"
60	"6*10"
999	"9*100+9*10+9"
10004	"1*10000+4"
Note: input >= 0
*/

const simplify = (number) => {
  number = String(number);
  if (number.length === 1) {
    if (number === "0") {
      return "";
    } else {
      return number;
    }
  }

  let l = number.length - 1;
  let n = [];

  for (let i = 0; i < number.length - 1; i++) {
    let c = number[i];
    if (c !== "0") {
      n.push(`${c}*1${"0".repeat(l)}`);
    }
    l--;
  }

  return number[number.length - 1] !== "0"
    ? n.join("+") + "+" + number[number.length - 1]
    : n.join("+");
};

console.log(simplify(812313));
//8*100000+1*10000+2*1000+3*100+1*10+3
