/*
Imagine that we have ATM with multiple currencies. The users can withdraw money of in any currency that the ATM has.

Our function must analyze the currency and value of what the users wants, and give money to the user starting from bigger values to smaller. The ATM gives the least amount of notes possible.

This kata has a preloaded dictionary of possible bank note values for different currencies (RUB, EUR, UAH, USD, CUP, SOS):

const VALUES = { "EUR": [5, 10, 20, 50, 100, 200, 500], "USD": ... }
// Note: VALUES and its internal arrays are frozen, don't try to mutate them
The function should return a string containing how many bank notes of each value the ATM will give out, for example:

"8 * 100 USD, 2 * 20 USD, 1 * 2 USD"
If it can't do that because there are no notes for this value, it should return:

"Can't do *value* *currency*. Value must be divisible by *amount*!"
(replace *value*, *currency* and *amount* with the relevant details)

If it doesn't have the requested currency at all, it should return:

"Sorry, have no *currency*."
Notes:
Letter case and word order doesn't matter in the input: e.g. "EUR 1000" and "1000eur" are the same. See test cases for more user input samples.
Do not create your own VALUES dictionary/hash or you'll get broken tests.
*/

const VALUES = {
  RUB: [10, 50, 100, 500, 1000, 5000],
  EUR: [5, 10, 20, 50, 100, 200, 500],
  UAH: [1, 2, 5, 10, 50, 100, 500],
  USD: [1, 2, 5, 10, 20, 50, 100],
  CUP: [1, 3, 5, 10, 20, 50, 100],
  SOS: [1000],
};

const atm = (value) => {
  value = value.trim().toUpperCase();

  if (!/\d/.test(value)) {
    return `Sorry, have no ${value}.`;
  }

  const match = value.match(/^(\d+)\s*([A-Z]+)$|^([A-Z]+)\s*(\d+)$/);
  if (!match) {
    const unknown = value.replace(/\d+/g, "").replace(/\s+/g, "");
    return `Sorry, have no ${unknown}.`;
  }

  const amount = Number(match[1] || match[4]);
  const currency = (match[2] || match[3]).toUpperCase();

  if (!VALUES[currency]) {
    return `Sorry, have no ${currency}.`;
  }

  const notes = VALUES[currency].slice().sort((a, b) => b - a);
  const smallest = notes[notes.length - 1];

  if (amount % smallest !== 0) {
    return `Can't do ${amount} ${currency}. Value must be divisible by ${smallest}!`;
  }

  let remaining = amount;
  const result = [];

  for (const note of notes) {
    if (remaining >= note) {
      const count = Math.floor(remaining / note);
      result.push(`${count} * ${note} ${currency}`);
      remaining -= count * note;
    }
  }

  return result.join(", ");
};

console.log(atm("10202UAH"));
//20 * 500 UAH, 2 * 100 UAH, 1 * 2 UAH
