/*
This is the first part of this kata series. Second part is here and third part is here

Add two English words together!

Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten" 
Input - Will be between zero and ten and will always be in lower case

Output - Word representation of the result of the addition. Should be in lower case
*/

class Arith {
  constructor(value) {
    this.value = value;
  }

  static wordToNumber(word) {
    const wordToNumberMap = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
    };
    return wordToNumberMap[word];
  }

  static numberToWord(number) {
    const numberToWordMap = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
    };
    if (number <= 20) {
      return numberToWordMap[number];
    } else {
      const tens = Math.floor(number / 10);
      const ones = number % 10;
      return numberToWordMap[tens * 10] + "-" + numberToWordMap[ones];
    }
  }

  add(otherWord) {
    const thisNumber = Arith.wordToNumber(this.value);
    const otherNumber = Arith.wordToNumber(otherWord);
    const resultNumber = thisNumber + otherNumber;
    const resultWord = Arith.numberToWord(resultNumber);
    return resultWord;
  }
}

let number = new Arith("three");
console.log(number.add("seven")); //ten
