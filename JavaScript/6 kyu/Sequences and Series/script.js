/*
Have a look at the following numbers.

 n | score
---+-------
 1 |  50
 2 |  150
 3 |  300
 4 |  500
 5 |  750
Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n.

Note Real test cases consists of 100 random cases where 1 <= n <= 10000
*/

const getScore = (n) => {
  let result = 0;
  let increment = 50;
  while (n > 0) {
    result += increment;
    increment += 50;
    n--;
  }
  return result;
};

console.log(getScore(100)); //252500
