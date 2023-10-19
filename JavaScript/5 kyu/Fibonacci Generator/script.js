/*
Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2
*/

function genfib() {
  let a = 0;
  let b = 1;
  return function fib() {
    const result = a;
    a = b;
    b = result + a;
    return result;
  };
}

const fib = genfib();
for (let i = 0; i < 10; i++) {
  console.log(fib());
}

/*
0
1
1
2
3
5
8
13
21
34
*/
