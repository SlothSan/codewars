/*
You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.

to do this return an Iterator<BigInt> starting with 1

A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:

1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, .
*/

function* fibonacciSequence() {
  let current = 1n;
  let next = 1n;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const expected = [
  1n,
  1n,
  2n,
  3n,
  5n,
  8n,
  13n,
  21n,
  34n,
  55n,
  89n,
  144n,
  233n,
  377n,
  610n,
  987n,
  1597n,
  2584n,
  4181n,
  6765n,
  10946n,
  17711n,
  28657n,
  46368n,
  75025n,
  121393n,
  196418n,
  317811n,
  514229n,
  832040n,
];
const stream = fibonacciSequence();
const actual = Array(expected.length)
  .fill(0)
  .map(() => stream.next().value);

console.log(actual);
/*
[
       1n,      1n,      2n,      3n,
       5n,      8n,     13n,     21n,
      34n,     55n,     89n,    144n,
     233n,    377n,    610n,    987n,
    1597n,   2584n,   4181n,   6765n,
   10946n,  17711n,  28657n,  46368n,
   75025n, 121393n, 196418n, 317811n,
  514229n, 832040n
]
*/
