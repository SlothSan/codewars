/*
In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

Customers in the dictionary are represented as:

{ 'customerName' : [list_of_order_values_as_integers] }
See example test case for more details.
*/

const pizzaRewards = (customers, minOrders, minPrice) => {
  return Object.keys(customers).filter(
    (customer) =>
      customers[customer].filter((order) => order >= minPrice).length >=
      minOrders
  );
};

let minOrders = 5;
let minPrice = 20;
let customers = {
  "John Doe": [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
  "Jane Doe": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45], // Has six orders above 20$, which means FREE PIZZA!
};

console.log(pizzaRewards(customers, minOrders, minPrice)); //[ 'Jane Doe' ]
