/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/
const queueTime = (customers, n) => {
  const tills = new Array(n).fill(0);
  for (let waitTime of customers) {
    const lowestWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowestWaitTill] += waitTime;
  }
  return Math.max(...tills);
};

console.log(queueTime([2, 3, 10, 2], 2)); //12
