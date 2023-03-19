/* */

const meeting = (x, need) => {
  if (0 === need) return "Game On";
  let ans = x.map(([x, y]) => Math.max(...[y - x.length, 0]));
  let sum = ans.reduce((a, b) => a + b, 0);
  if (sum < need) {
    return "Not enough!";
  } else {
    let sum = 0;
    let ret = [];
    while (sum < need) {
      let tmp = ans.shift();
      sum += tmp;
      ret.push(tmp);
    }
    ret[ret.length - 1] -= sum - need;
    return ret;
  }
};

console.log(
  meeting(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
    ],
    4
  )
); //[ 0, 1, 3 ]
