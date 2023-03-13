/*
Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

const reverse = (n) => {
  let revNumber = 0;
  while (n > 0) {
    revNumber = revNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return revNumber;
};

console.log(reverse(123)); //321
