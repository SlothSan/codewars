/*
This is the first part of three (part2, part3).

Generators and Iterators are ES6 features that allow things like this:

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
Using them in this way, we can do amazing things:

let seq = fibonacci();
seq.next() ==> 1
seq.next() ==> 2
seq.next() ==> 3
seq.next() ==> 5
seq.next() ==> 8
The goal of this kata is to implement pseudo-generators with ES5.

The first thing to do is to implement the generator function:

function generator(sequencer) {
   ...
}
generator(sequencer[, arg1, arg2, ...]) receives a sequencer function to generate the sequence and returns an object with a next() method. When the next() method is invoked, the next value is generated. The method could receive as well optional arguments to be passed to the sequencer function.

This is an example of a dummy sequencer:

function dummySeq() {
  return function() {
    return "dummy";
  };
}
To test generator(), you could use dummySeq() in this way:

var seq = generator(dummySeq);
seq.next() ==> 'dummy'
seq.next() ==> 'dummy'
seq.next() ==> 'dummy'
....
When you're done, you should implement the following generators (I think the functions are self explanatory):

function factorialSeq() {...} // 1, 1, 2, 6, 24, ...
function fibonacciSeq() {...} // 1, 1, 2, 3, 5, 8, 13, ...
function rangeSeq(start, step) {...} // rangeSeq(1, 2)  -> 1, 3, 5, 7, ...
function primeSeq() {...} // 2, 3, 5, 7, 11, 13, ...
function partialSumSeq(1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
You can use any of them in the same way:

var seq = generator(factorialSeq);
seq.next() ==> 1
seq.next() ==> 1
seq.next() ==> 2
seq.next() ==> 6
seq.next() ==> 24
...
There are some sequences which are infinite and others are not. For example:

primeSeq: Is infinite
partialSumSeq: Is limited to the passed values.
When the sequence is done (in finite sequences), if you call seq.next() again, it should produce an error.

Good luck!
*/

const generator = (sequencer, ...args) => {
  const gen = sequencer(...args);
  return {
    next: () => {
      const result = gen();
      if (result === "end") throw new Error("End of sequence");
      return result;
    },
  };
};

const dummySeq = () => () => "dummy";

const factorialSeq = () => {
  let n = 0,
    fact = 1;
  return () => {
    if (n === 0 || n === 1) {
      n++;
      return fact;
    }
    fact *= n++;
    return fact;
  };
};

const fibonacciSeq = () => {
  let [prev, curr] = [0, 1];
  return () => {
    [prev, curr] = [curr, prev + curr];
    return prev;
  };
};

const rangeSeq = (start, step) => {
  let current = start;
  return () => {
    const result = current;
    current += step;
    return result;
  };
};

const primeSeq = () => {
  let num = 1;
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return n > 1;
  };
  return () => {
    do num++;
    while (!isPrime(num));
    return num;
  };
};

const partialSumSeq = (...args) => {
  let index = 0,
    sum = 0;
  return () => {
    if (index >= args.length) return "end";
    sum += args[index++];
    return sum;
  };
};

const logTest = (description, actual, expected) => {
  console.log(
    description +
      ": " +
      (actual === expected
        ? "PASS"
        : `FAIL (Expected ${expected}, got ${actual})`)
  );
};

const expectError = (description, fn) => {
  try {
    fn();
    console.log(description + ": FAIL (Expected an error but none was thrown)");
  } catch (e) {
    console.log(description + ": PASS");
  }
};

// Dummy generator test
console.log("ES5 Dummy generator");
var seq = generator(dummySeq);
logTest("Test dummy generator - 1", seq.next(), "dummy");
logTest("Test dummy generator - 2", seq.next(), "dummy");
logTest("Test dummy generator - 3", seq.next(), "dummy");

// Factorial generator test
console.log("\nES5 Simple Generators - Factorial");
var seq = generator(factorialSeq);
logTest("Factorial - 1", seq.next(), 1); // 0! = 1
logTest("Factorial - 2", seq.next(), 1); // 1! = 1
logTest("Factorial - 3", seq.next(), 2); // 2! = 2
logTest("Factorial - 4", seq.next(), 6); // 3! = 6
logTest("Factorial - 5", seq.next(), 24); // 4! = 24

// Fibonacci generator test
console.log("\nES5 Simple Generators - Fibonacci");
var seq = generator(fibonacciSeq);
logTest("Fibonacci - 1", seq.next(), 1); // fib(0) = 1
logTest("Fibonacci - 2", seq.next(), 1); // fib(1) = 1
logTest("Fibonacci - 3", seq.next(), 2); // fib(2) = 2
logTest("Fibonacci - 4", seq.next(), 3); // fib(3) = 3
logTest("Fibonacci - 5", seq.next(), 5); // fib(4) = 5
logTest("Fibonacci - 6", seq.next(), 8); // fib(5) = 8
logTest("Fibonacci - 7", seq.next(), 13); // fib(6) = 13

// Range generator test
console.log("\nES5 Simple Generators - Range");
var seq = generator(rangeSeq, 5, 3); // 5, 8, 11, 14
logTest("Range - 1", seq.next(), 5);
logTest("Range - 2", seq.next(), 8);
logTest("Range - 3", seq.next(), 11);
logTest("Range - 4", seq.next(), 14);

// Prime number generator test
console.log("\nES5 Simple Generators - Prime Numbers");
var seq = generator(primeSeq);
logTest("Prime - 1", seq.next(), 2);
logTest("Prime - 2", seq.next(), 3);
logTest("Prime - 3", seq.next(), 5);
logTest("Prime - 4", seq.next(), 7);
logTest("Prime - 5", seq.next(), 11);
logTest("Prime - 6", seq.next(), 13);
logTest("Prime - 7", seq.next(), 17);
logTest("Prime - 8", seq.next(), 19);

// Partial sum generator test
console.log("\nES5 Simple Generators - Partial Sum");
var seq = generator(partialSumSeq, -1, 4, 2, 5);
logTest("Partial Sum - 1", seq.next(), -1);
logTest("Partial Sum - 2", seq.next(), 3);
logTest("Partial Sum - 3", seq.next(), 5);
logTest("Partial Sum - 4", seq.next(), 10);
expectError("Partial Sum - Error expected", seq.next);
