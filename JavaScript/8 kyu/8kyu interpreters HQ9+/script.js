/*
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
For everything else, don't return anything (return null in C#, None in Rust).
(+ has no visible effects so we can safely ignore it.)
*/

const HQ9 = (input) => {
  if (input === "H") {
    return "Hello World!";
  } else if (input === "Q") {
    return input;
  } else if (input === "9") {
    let lyrics = "";
    for (let bottles = 99; bottles > 0; bottles--) {
      lyrics += `${bottles} bottle${
        bottles !== 1 ? "s" : ""
      } of beer on the wall, ${bottles} bottle${
        bottles !== 1 ? "s" : ""
      } of beer.\n`;
      lyrics += `Take one down and pass it around, ${
        bottles - 1 === 0 ? "no more" : bottles - 1
      } bottle${bottles - 1 !== 1 ? "s" : ""} of beer on the wall.\n`;
    }
    lyrics += "No more bottles of beer on the wall, no more bottles of beer.\n";
    lyrics +=
      "Go to the store and buy some more, 99 bottles of beer on the wall.";
    return lyrics;
  } else {
    return undefined;
  }
};

console.log(HQ9("9"));
