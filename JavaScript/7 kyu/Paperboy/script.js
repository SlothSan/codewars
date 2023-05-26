/*
You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. For your services you'll be charging a set price depending on the quantity of the newspaper bundles.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1
Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. What you'll be doing is providing the cheapest possible quotes for your services.

Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. The returned number must be rounded to two decimal places.
*/

const cheapestQuote = (newspapers) => {
  const prices = [
    [40, 385],
    [20, 193],
    [10, 97],
    [5, 49],
    [1, 10],
  ];
  let cost = 0,
    quantity = newspapers;
  for (let [quant, price] of prices) {
    let n = Math.floor(quantity / quant);
    cost += n * price;
    quantity -= n * quant;
  }
  return cost / 100;
};

console.log(cheapestQuote(26)); //2.52
