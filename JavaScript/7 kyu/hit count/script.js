const counterEffect = (hitCount) => {
  hitCount = hitCount.split("");
  let returnArr = [];
  for (let i = 0; i < hitCount.length; i++) {
    let currentArr = [];
    for (let j = 0; j <= hitCount[i]; j++) {
      currentArr.push(j);
    }
    returnArr.push(currentArr);
  }
  return returnArr;
};

console.log(counterEffect("1250")); //[ [ 0, 1 ], [ 0, 1, 2 ], [ 0, 1, 2, 3, 4, 5 ], [ 0 ] ]
