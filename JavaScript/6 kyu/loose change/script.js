const looseChange = (cents) => {
  cents = Math.floor(cents);
  let change = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return change;

  while (cents / 25 >= 1) {
    change["Quarters"]++;
    cents -= 25;
  }
  while (cents / 10 >= 1) {
    change["Dimes"]++;
    cents -= 10;
  }
  while (cents / 5 >= 1) {
    change["Nickels"]++;
    cents -= 5;
  }
  while (cents / 1 >= 1) {
    change["Pennies"]++;
    cents -= 1;
  }

  return change;
};
