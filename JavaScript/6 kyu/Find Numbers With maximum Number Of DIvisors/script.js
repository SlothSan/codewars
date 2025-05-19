/*
Task
Find the integer from a to b (included) with the greatest number of divisors. For example:

divNum(15, 30)   ==> 24
divNum(1, 2)     ==> 2
divNum(0, 0)     ==> 0
divNum(52, 156)  ==> 120
If there are several numbers that have the same (maximum) number of divisors, the smallest among them should be returned. Return the string "Error" if a > b.
*/

const divNum = (a, b) => {
  if (a > b) return "Error";
  if (a === 0 && b === 0) return 0;

  let best = null,
    bestCnt = -1;
  for (let n = a; n <= b; n++) {
    let cnt = 0;
    if (n > 0) {
      cnt = n === 1 ? 1 : 2;
      for (let d = 2, lim = Math.floor(Math.sqrt(n)); d <= lim; d++)
        if (n % d === 0) cnt += d * d === n ? 1 : 2;
    }
    if (cnt > bestCnt || (cnt === bestCnt && n < best)) {
      bestCnt = cnt;
      best = n;
    }
  }
  return best;
};

console.log(divNum(52, 156));
//120
