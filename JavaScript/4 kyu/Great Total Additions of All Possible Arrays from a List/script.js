/*
We have three numbers: 123489, 5, and 67. With these numbers we form the list from their digits in this order [1, 5, 6, 2, 7, 3, 4, 8, 9]. It shouldn't take you long to figure out what to do to achieve this ordering.

Furthermore, we want to put a limit to the number of terms of the above list.

Instead of having 9 numbers, we only want 7, so we discard the two last numbers.

So, our list will be reduced to [1, 5, 6, 2, 7, 3, 4] (base list)

We form all the possible arrays, from the list above, and we calculate, for each array, the addition of their respective digits.

See the table below: we will put only some of them

array for the list      sum (terms of arrays)
[1]                      1 # arrays with only one term (7 different arrays)
[5]                      5
[6]                      6
[2]                      2
[7]                      7
[3]                      3
[4]                      4

[1, 5]                   6 # arrays with two terms (42 different arrays)
[1, 6]                   7
[1, 2]                   3
[1, 7]                   8
[1, 3]                   4
[1, 4]                   5

.....                   ...
[1, 5, 6]               12 # arrays with three terms(210 different arrays)
[1, 5, 2]                8 
[1, 5, 7]               13 
[1, 5, 3]                9 
........                ...
[1, 5, 6, 2]            14 # arrays with four terms(840 different arrays)
[1, 5, 6, 7]            19 
[1, 5, 6, 3]            15 
[1, 5, 6, 4]            16 
............            ..
[1, 5, 6, 2, 7]         21 # arrays with five terms(2520 different arrays)
[1, 5, 6, 2, 3]         17 
[1, 5, 6, 2, 4]         18 
[1, 5, 6, 7, 2]         21 
...............         ..
[1, 5, 6, 2, 7, 3]      24 # arrays with six terms(5040 different arrays)
[1, 5, 6, 2, 7, 4]      25 
[1, 5, 6, 2, 3, 7]      24 
[1, 5, 6, 2, 3, 4]      21 
..................      .. 
[1, 5, 6, 2, 7, 3, 4]   28 # arrays with seven terms(5040 different arrays)
[1, 5, 6, 2, 7, 4, 3]   28   # arrays of max length = limit
[1, 5, 6, 2, 3, 7, 4]   28 
[1, 5, 6, 2, 3, 4, 7]   28 
:::::::::::::::::::::::::::
GreatT0talAdditions 328804 (GTA).(The total addition of the sum values corresponding to each permutation). A total 0f 13699 arrays, all of them different.
So we say that for the three numbers, 123489, 5, and 67 with a limit = 7, the GTA value is 328804.

Let's see now a case where we have digits occurring more than once. If we have a digit duplicated or more, just continue for the corresponding digit in turn of the next number. The result will be a list with no duplicated digits.

For the numbers: 12348, 47, 3639  with  limit = 8 we will have the list [1, 4, 3, 2, 7, 6, 9, 8] (base list)

We should not have duplications in the permutations because there are no duplicated digits in our base list.

For this case we have:

number of different array      number of terms the array has
              8                                  1 
             56                                  2 
            336                                  3
           1680                                  4
           6720                                  5
          20160                                  6
          40320                                  7
          40320                                  8
GTA = 3836040 with a limit of eight terms
The challenge: create the function gta(), that receives a number that limits the amount of terms for the base list, limit, and an uncertain number of integers that can have and will have different amount of digits that may have digits occuring more than once.

Just to understand the structure of the function will be like: gta(limit, n1, n2, ...nk)

Let's see our functions with the examples shown above.

# case1
gta(7, 123489, 5, 67) == 328804 # base_list = [1, 5, 6, 2, 7, 3, 4]

# case2
gta(8, 12348, 47, 3639) == 3836040 # base_list = [1, 4, 3, 2, 7, 6, 9, 8]
You may assume that limit will be always lower or equal than the total available digits of all the numbers. The total available digits are all the digits of all the numbers. (E.g.the numbers 12348, 47, 3639 have 8 available digits.) You will always be receiving positive integers in an amount between 2 and 6.

For the tests limit <= 9 (obviously).

Enjoy it!!

(Hint: the module itertools for python may be very useful, but there are many ways to solve it.)

(The arrays [1, 5, 6] and [1, 6, 5] have the same elements but are different arrays. The order matters)
*/

const gta = (limit, ...numbers) => {
  const seen = Array(10).fill(false);
  const strings = numbers.map(String);
  const maxLen = Math.max(...strings.map((s) => s.length));
  const base = [];

  for (let pos = 0; pos < maxLen && base.length < limit; ++pos) {
    for (const s of strings) {
      if (pos < s.length) {
        const d = s.charCodeAt(pos) - 48;
        if (!seen[d]) {
          seen[d] = true;
          base.push(d);
          if (base.length === limit) break;
        }
      }
    }
  }

  const n = base.length;
  const sum = base.reduce((a, b) => a + b, 0);

  const fact = [1];
  for (let i = 1; i <= 9; ++i) fact[i] = fact[i - 1] * i;

  const comb = (a, b) => fact[a] / (fact[b] * fact[a - b]);

  let coeff = 0;
  for (let k = 1; k <= n; ++k) coeff += fact[k] * comb(n - 1, k - 1);

  return coeff * sum;
};

console.log(gta(4, 7303, 7841)); //882
