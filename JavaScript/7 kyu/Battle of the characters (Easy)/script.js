/*
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"
*/

const power = (input) => {
  return [...input].reduce((acc, curr) => acc + curr.charCodeAt(0) - 64, 0);
};

const battle = (x, y) => {
  let xPower = power(x);
  let yPower = power(y);
  return xPower > yPower ? x : xPower === yPower ? "Tie!" : y;
};

console.log(battle("HELLO", "WORLD")); //WORLD
