/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/

const solve = (n) => {
  if (n < 1 || n > 1500) {
    return -1;
  }

  const banknotes = [10, 20, 50, 100, 200, 500];
  let count = 0;

  for (let i = banknotes.length - 1; i >= 0; i--) {
    const banknote = banknotes[i];
    while (n >= banknote) {
      n -= banknote;
      count++;
    }
  }

  if (n !== 0) {
    return -1;
  }

  return count;
};

console.log(solve(1500)); //3
