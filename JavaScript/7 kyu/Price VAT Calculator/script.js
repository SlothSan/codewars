/*
Create a simple vat calculator class for retrieving the net value and the vat amount from a gross price.

Within the class create the two methods getNet(grossPrice) and getVat(grossPrice).

What is passed to you: vatRate - number 0 - 100 (%) grossPrice - Gross price value

Rounding is achieved using :

toFixed(2)
but the return value has to be the rounded Number not String.

Background:

Vat = Net * vatRate

Net + Vat = grossPrice

Note : you have to re-arrange those two definitions to come up with the equations needed.

Ex :

var calc = new Calculator(20); // vat rate at 20%
calc.getNet(100) === 83.33  //gross price of 100 => net will be 83.33
calc.getVat(100) === 16.67  //gross price of 100 => var === 16.67```
*/

class Calculator {
  constructor(vatRate) {
    this.vatRate = vatRate / 100;
  }

  getNet(grossPrice) {
    const net = grossPrice / (1 + this.vatRate);
    return Number(net.toFixed(2));
  }

  getVat(grossPrice) {
    const vat = grossPrice - this.getNet(grossPrice);
    return Number(vat.toFixed(2));
  }
}

const calc = new Calculator(20);

console.log(calc.getNet(200), calc.getVat(200)); //166.67 33.33
