/*
You will be given a certain array of length n, such that n > 4, having positive and negative integers but there will be no zeroes and all the elements will occur once in it.

We may obtain an amount of n sub-arrays of length n - 1, removing one element at a time (from left to right).

For each subarray, let's calculate the product and sum of its elements with the corresponding absolute value of the quotient, q = SubProduct/SubSum (if it is possible, SubSum cannot be 0). Then we select the array with the lowest value of |q|(absolute value)

e.g.: we have the array, arr = [1, 23, 2, -8, 5]

Sub Arrays            SubSum    SubProduct         |q|
[23, 2, -8, 5]         22         -1840         83.636363
[1, 2, -8, 5]           0           -80          No value
[1, 23, -8, 5]         21          -920         43.809524
[1, 23, 2, 5]          31           230          7.419355  <--- selected array
[1, 23, 2, -8]         18           368         20.444444

Let's compare the given array with the selected subarray:

[1, 23, 2, -8, 5]
[1, 23, 2,     5]

The difference between them is at the index 3 for the given array, with element -8, so we put both things for a result [3, -8].

That means that to obtain the selected subarray we have to take out the value -8 at index 3. We need a function that receives an array as an argument and outputs the pair [index, arr[index]] that generates the subarray with the lowest value of |q|.

select_subarray([1, 23, 2, -8, 5]) == [3, -8]

Another case:

select_subarray([1, 3, 23, 4, 2, -8, 5, 18]) == [2, 23]

In Javascript the function will be selectSubarray().

We may have some special arrays that may have more than one solution as the one that follows below.

select_subarray([10, 20, -30, 100, 200]) == [[3, 100], [4, 200]]

If there is more than one result the function should output a 2Darray sorted by the index of the element removed from the array.

Thanks to Unnamed for detecting the special cases when we have multiple solutions.

Features of the random tests:

Number of tests = 200
length of the array, l, such that 20 <= l <= 100

Enjoy it!!
*/

const selectSubarray = (arr) => {
    let results = [];
    let minAbsQ = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const subArray = arr.slice(0, i).concat(arr.slice(i + 1));
        const subSum = subArray.reduce((sum, num) => sum + num, 0);
        const subProduct = subArray.reduce((prod, num) => prod * num, 1);
        if (subSum === 0) continue;
        const absQ = Math.abs(subProduct / subSum);
        if (absQ < minAbsQ) {
            minAbsQ = absQ;
            results = [[i, arr[i]]];
        } else if (absQ === minAbsQ) {
            results.push([i, arr[i]]);
        }
    }

    return results.length === 1 ? results[0] : results.sort((a, b) => a[0] - b[0]);
}

console.log(selectSubarray([1, 23, 2, -8, 5])) //[ 3, -8 ]
