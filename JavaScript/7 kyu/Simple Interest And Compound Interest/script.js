/*
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

Notes:

Round all answers to the nearest integer
Principal will always be an integer between 0 and 9999
interest rate will be a decimal between 0 and 1
number of time periods will be an integer between 0 and 50
Examples
interest(100, 0.1,  1)  =  [110, 110]
interest(100, 0.1,  2)  =  [120, 121]
interest(100, 0.1, 10)  =  [200, 259]
More on Simple interest, compound interest and continuous interest
*/

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
