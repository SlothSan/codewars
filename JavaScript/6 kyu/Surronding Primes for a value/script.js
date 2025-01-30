/*
We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]

If n is a prime number it will give two primes, n will not be included in the result.

Let's see some cases:

primeBefAft(100) == [97, 101]

primeBefAft(97) == [89, 101]

primeBefAft(101) == [97, 103]

Range for the random tests: 1000 <= n <= 200000

(The extreme and special case n = 2 will not be considered for the tests. Thanks Blind4Basics)

Happy coding!!
*/

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const primeBefAft = (n) => {
    let befPrime = n - 1;
    while (!isPrime(befPrime)) {
        befPrime--;
    }

    let aftPrime = n + 1;
    while (!isPrime(aftPrime)) {
        aftPrime++;
    }

    return [befPrime, aftPrime];
}

console.log(primeBefAft(10)) //[ 7, 11 ]
