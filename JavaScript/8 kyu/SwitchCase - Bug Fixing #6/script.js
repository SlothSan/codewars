/*
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
*/

const evalObject = (value) => {
  switch (value.operation) {
    case "+":
      return value.a + value.b;
    case "-":
      return value.a - value.b;
    case "/":
      return value.a / value.b;
    case "*":
      return value.a * value.b;
    case "%":
      return value.a % value.b;
    case "^":
      return value.a ** value.b;
  }
};

console.log(evalObject({ a: 1, b: 2, value: "+" }));
