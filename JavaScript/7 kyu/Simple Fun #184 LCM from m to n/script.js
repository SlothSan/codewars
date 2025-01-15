/* 
Task
Your task is to find the smallest number which is evenly divided by all numbers between m and n (both inclusive).

Example
For m = 1, n = 2, the output should be 2.

For m = 2, n = 3, the output should be 6.

For m = 3, n = 2, the output should be 6 too.

For m = 1, n = 10, the output should be 2520.

Input/Output
[input] integer m
1 ≤ m ≤ 25

[input] integer n
1 ≤ n ≤ 25

[output] an integer
*/

const mnLCM = (m, n) => {
  let start = Math.min(m, n),
    end = Math.max(m, n),
    gcd = (a, b) => (b ? gcd(b, a % b) : a),
    lcm = (a, b) => (a * b) / gcd(a, b),
    result = 1;
  for (let i = start; i <= end; i++) result = lcm(result, i);
  return result;
};

console.log(mnLCM(1, 25));
//26771144400
