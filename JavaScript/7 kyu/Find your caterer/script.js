/*
You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

Number of orders is always equal to number of people.

For example,


budget, people => (200, 9) will return 2.

budget, people => (300, 9) will return 3 and so on.
Goodluck :)
*/

const findCaterer = (budget, people) => {
  if (!people) return -1;
  let prices = [
    15 * people,
    20 * people,
    30 * people - (people > 60 ? 30 * people * 0.2 : 0),
  ];
  for (let i = prices.length; i >= 0; i--) {
    if (prices[i] <= budget) return i + 1;
  }
  return -1;
};

console.log(findCaterer(1500, 60)); //2
