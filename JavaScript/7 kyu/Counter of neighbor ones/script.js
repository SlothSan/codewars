/*
Task

Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array
Example

[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/

function onesCounter(input) {
  let result = [];
  let onecount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) {
      onecount++;
    } else {
      if (onecount > 0) {
        result.push(onecount);
        onecount = 0;
      }
    }
  }
  if (onecount > 0) {
    result.push(onecount);
  }
  return result;
}

console.log(onesCounter([1, 1, 1, 1, 1])); //[ 5 ]
