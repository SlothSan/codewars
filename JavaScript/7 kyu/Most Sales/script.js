/*

You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

const top3 = (products, amounts, prices) => {
  // Calculate totals
  let totals = amounts.map((amount, index) => amount * prices[index]);
  let orderedProducts = [];

  // Find top 3 products
  for (let i = 0; i < 3; i++) {
    let maxIndex = totals.indexOf(Math.max(...totals));
    orderedProducts.push(products[maxIndex]);
    totals[maxIndex] = -1; // Mark as visited
  }
  return orderedProducts;
};

console.log(
  top3(
    ["Computer", "Cell Phones", "Vacuum Cleaner"],
    [3, 24, 8],
    [199, 299, 399]
  )
);
//[ 'Cell Phones', 'Vacuum Cleaner', 'Computer'];
