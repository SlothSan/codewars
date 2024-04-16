/*
This is the first of my "-nacci" series. If you like this kata, check out the zozonacci sequence too.

Task
Mix -nacci sequences using a given pattern p.
Return the first n elements of the mixed sequence.
Rules
The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
When n is 0 or p is empty return an empty list.
If n is more than the length of p repeat the pattern.
Examples
            0  1  2  3  4  
----------+------------------
fibonacci:| 0, 1, 1, 2, 3 ...
padovan:  | 1, 0, 0, 1, 0 ...
pell:     | 0, 1, 2, 5, 12 ...

pattern = ['fib', 'pad', 'pel']
n = 6
#          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
# result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
result = [0, 1, 0, 1, 0, 1]

pattern = ['fib', 'fib', 'pel']
n = 6
#          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
# result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
result = [0, 1, 0, 1, 2, 1]
Sequences
fibonacci : 0, 1, 1, 2, 3 ...
padovan: 1, 0, 0, 1, 0 ...
jacobsthal: 0, 1, 1, 3, 5 ...
pell: 0, 1, 2, 5, 12 ...
tribonacci: 0, 0, 1, 1, 2 ...
tetranacci: 0, 0, 0, 1, 1 ...
Pattern mapping
'fib' -> fibonacci
'pad' -> padovan
'jac' -> jacobstahl
'pel' -> pell
'tri' -> tribonacci
'tet' -> tetranacci
If you like this kata, check out the zozonacci sequence.
*/

const fibMemo = {};

const fib = (n) => {
  if (n in fibMemo) {
    value = fibMemo[n];
  } else {
    if (n === 1) {
      value = 0;
    } else if (n === 2) {
      value = 1;
    } else {
      value = fib(n - 1) + fib(n - 2);
      fibMemo[n] = value;
    }
  }
  return value;
};

const triMemo = {};

const tri = (n) => {
  if (n in triMemo) {
    value = triMemo[n];
  } else {
    if (n <= 2) {
      value = 0;
    } else if (n === 3) {
      value = 1;
    } else {
      value = tri(n - 1) + tri(n - 2) + tri(n - 3);
      triMemo[n] = value;
    }
  }
  return value;
};

const tetMemo = {};

const tet = (n) => {
  if (n in tetMemo) {
    value = tetMemo[n];
  } else {
    if (n <= 3) {
      value = 0;
    } else if (n === 4) {
      value = 1;
    } else {
      value = tet(n - 1) + tet(n - 2) + tet(n - 3) + tet(n - 4);
      tetMemo[n] = value;
    }
  }
  return value;
};

const pad = (n) => {
  if (n === 1) {
    return 1;
  }
  if (n <= 3) {
    return 0;
  } else {
    return pad(n - 2) + pad(n - 3);
  }
};

const jacMemo = {};

const jac = (n) => {
  if (n in jacMemo) {
    value = jacMemo[n];
  } else {
    if (n === 1) {
      value = 0;
    } else if (n === 2) {
      value = 1;
    } else {
      value = jac(n - 1) + 2 * jac(n - 2);
      jacMemo[n] = value;
    }
  }
  return value;
};

const pelMemo = {};

const pel = (n) => {
  if (n in pelMemo) {
    value = pelMemo[n];
  } else {
    if (n === 1) {
      value = 0;
    } else if (n === 2) {
      value = 1;
    } else {
      value = 2 * pel(n - 1) + pel(n - 2);
      pelMemo[n] = value;
    }
  }
  return value;
};

const mixbonacci = (pattern, length) => {
  if (pattern.length === 0) {
    return [];
  }
  if (length === 0) {
    return [];
  }
  let rv = [];
  let count = { fib: 1, pad: 1, jac: 1, pel: 1, tri: 1, tet: 1 };
  while (rv.length < length) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] === "fib") {
        rv.push(fib(count[pattern[j]]));
      } else if (pattern[j] === "pad") {
        rv.push(pad(count[pattern[j]]));
      } else if (pattern[j] === "jac") {
        rv.push(jac(count[pattern[j]]));
      } else if (pattern[j] === "pel") {
        rv.push(pel(count[pattern[j]]));
      } else if (pattern[j] === "tri") {
        rv.push(tri(count[pattern[j]]));
      } else {
        rv.push(tet(count[pattern[j]]));
      }
      count[pattern[j]] += 1;
      if (rv.length == length) {
        break;
      }
    }
  }
  return rv;
};

console.log(mixbonacci(["jac", "pel"], 10));
/*[
    0, 0, 1, 1,  1,
    2, 3, 5, 5, 12
  ] */
