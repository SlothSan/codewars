/* 
Your task

X and Y are playing a game. A list will be provided which contains n pairs of strings and integers. They have to add the integeri to the ASCII values of the stringi characters. Then they have to check if any of the new added numbers is prime or not. If for any character of the word the added number is prime then the word will be considered as prime word.

Can you help X and Y to find the prime words?
Example:

prime_word({{"Emma",30},{"Liam",30}}) = {1,1};

    For the first word "Emma" ASCII values are: 69 109 109 97
    After adding 30 the values will be: 99 139 139 127
    As 139 is prime number so "Emma" is a Prime Word.

*/

const primeWord = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.map(([word, num]) =>
    word.split("").some((ch) => isPrime(ch.charCodeAt(0) + num)) ? 1 : 0
  );
};

console.log(
  primeWord([
    ["Emma", 30],
    ["Liam", 30],
  ])
); //[ 1, 1 ]
