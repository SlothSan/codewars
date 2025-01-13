/*
Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

Let's see some cases:

count_specMult(3, 200)  =>  6

The first 3 primes are: 2, 3 and 5.

And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.

Happy coding!!

*/

const countSpecMult = (n, limit) => {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const primes = [];
    let current = 2;
    while (primes.length < n) {
        if (isPrime(current)) primes.push(current);
        current++;
    }

    const product = primes.reduce((acc, prime) => acc * prime, 1);
    return Math.floor((limit - 1) / product);
}

console.log(countSpecMult(2, 100)) //16