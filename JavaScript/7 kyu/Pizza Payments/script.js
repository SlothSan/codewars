/*
Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
*/

const michaelPays = (costs) => {
  let kateContribution = Math.min(costs / 3, 10);
  let michaelContribution = costs - kateContribution;
  return costs < 5
    ? Math.round(costs * 100) / 100
    : Math.round(michaelContribution * 100) / 100;
};

console.log(80); //70
