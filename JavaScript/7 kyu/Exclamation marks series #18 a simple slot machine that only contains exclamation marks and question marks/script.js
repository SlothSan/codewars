/*
Description:
You are playing a simple slot machine that only contains exclamation marks and question marks. Every time the slot machine is started, a string of 5 length is obtained. If you're lucky enough to get a Special permutation, you'll win the bonus. Give you a string s, return the highest bonus.

Bouns list:

Five-of-a-Kind:   ---- 1000
"!!!!!" or "?????"

Four-of-a-Kind:    ---- 800
The string contains a "!!!!" or "????"
"!!!!?","?!!!!","????!","!????"

Full House:         ----500
such as "!!!??" or "???!!"...

Three-of-a-Kind:    ---- 300
The string contains a "!!!" or "???"
such as "!!!?!","!???!"...

Two pair:           ---- 200
The string contains two "!!" or "??"
such as "??!!?","!!?!!"

A Pair:             ---- 100
The string contains a "!!" or "??"
such as "?!??!","!!?!?"

Others              ---- 0
such as "?!?!?","!?!?!"
Examples
slot("!!!!!") === 1000
slot("!!!!?") === 800
slot("!!!??") === 500
slot("!!!?!") === 300
slot("!!?!!") === 200
slot("!!?!?") === 100
slot("!?!?!") === 0
*/

const slot = (s) => {
  let run = 1,
    max = 1,
    pairs = 0;

  for (let i = 1; i < 5; i++) {
    if (s[i] === s[i - 1]) {
      if (++run === 2) pairs++;
      if (run > max) max = run;
    } else run = 1;
  }

  const fullHouse =
    (s.includes("!!!") && s.includes("??")) ||
    (s.includes("???") && s.includes("!!"));

  return max === 5
    ? 1000
    : max === 4
    ? 800
    : fullHouse
    ? 500
    : max === 3
    ? 300
    : pairs === 2
    ? 200
    : pairs
    ? 100
    : 0;
};

console.log(slot("!!!?!")); //300
