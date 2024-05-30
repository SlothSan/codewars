const interest = (P, r, n) => {
  let simpleInterest = P;
  let compound = P;
  let time = n;
  while (time > 0) {
    simpleInterest += P * r;
    compound = compound += compound * r;
    time--;
  }
  return [Math.round(simpleInterest), Math.round(compound)];
};

console.log(interest(100, 0.1, 10));
//[ 200, 259 ]
