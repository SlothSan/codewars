/*
You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

const calculate = (...args1) => {
  const inner = (...args2) => {
    const combinedArgs = args1.concat(args2);
    const sum = combinedArgs.reduce((acc, value) => acc + value, 0);
    return sum;
  };
  return inner;
};

console.log(calculate(1, 3)(10, 41));
//55
