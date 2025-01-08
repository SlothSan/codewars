/*
Write Number in Expanded Form - Part 2

This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

807.304 --> "800 + 7 + 3/10 + 4/1000"
  1.24  --> "1 + 2/10 + 4/100"
  7.304 --> "7 + 3/10 + 4/1000"
  0.04  --> "4/100"
*/

const expandedForm = (num) => {
    const [integerPart, decimalPart] = num.toString().split(".");

    const integerExpanded = integerPart
        .split("")
        .map((digit, idx, arr) => digit === "0" ? "" : digit + "0".repeat(arr.length - idx - 1))
        .filter(Boolean);

    const decimalExpanded = decimalPart
        ? decimalPart
            .split("")
            .map((digit, idx) => digit === "0" ? "" : `${digit}/${10 ** (idx + 1)}`)
            .filter(Boolean)
        : [];

    return [...integerExpanded, ...decimalExpanded].join(" + ");
};

console.log(expandedForm(420.69)) //400 + 20 + 6/10 + 9/100
