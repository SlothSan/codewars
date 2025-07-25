/*
We have a positive integer N, N > 0.

We have a special integer N1, N1 > N, such that N1 = c ‧ d and N = c + d with the constraint that c ≠ d

Let´s see an example:

N = 26 (starting integer)
The next integer N1, chained with this property with N, will be 48.

Because:

N1 = 2 x 24 = 48
N = 2 + 24 = 26
But there are another integers chained with N with the property shown above. In effect the next integer N2 = 69

Let´s see:

N2 = 3 x 23 = 69
N = 3 + 23 = 26
The next integer N3 is 88 and you may figure out the values for c and d.

If we continue working trying to find the successive values of Ni for our starting integer N = 26 we will find the following chain.

26 (N) --> 48 (N1) --> 69 (N2) --> 88 (N3) --> ........... --> 160 (N9) --> 165 (N10) --> 168 (N11)
You may work to obtain the intermediate values of the above incomplete chain for the starting integer26

In the example above 169 is discarded as a solution, because as we said before c and d should be different.

The task for this exercise is the following:

Given a starting integer you have to find the maximum chained integer that fulfills the property explained above

Your code should output an integer in all cases. You will receive always an integer as an input.

Special Cases

If your starting integer is less than 5, we do not have a result higher than your starting integer. In those cases your code should output -1. As an example:
input:4; output:-1
You will see more examples in the fixed examples of the sample box. You have to pass 200 random tests and the values for the starting N are in the following range:

1000 < N < 1 * 10^9
I hope that this challenge will be useful for all the coding lovers.

Special Acknowledgements for two Codewarriors: Unnamed and macambira for their observations done in the beta phase.
*/

const maxIntChain = (n) =>
  n < 5
    ? -1
    : n % 2
    ? ((n - 1) / 2) * ((n + 1) / 2)
    : (n / 2 - 1) * (n / 2 + 1);

console.log(maxIntChain(32)); //255
