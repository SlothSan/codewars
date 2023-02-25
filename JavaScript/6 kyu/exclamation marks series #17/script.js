/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

const balance = (left, right) => {
  const count = (input) => {
    return input
      .split("")
      .map((chracter) => {
        if (chracter === "?") return 3;
        if (chracter === "!") return 2;
      })
      .reduce((accum, curr) => accum + curr, 0);
  };
  left = count(left);
  right = count(right);
  return left === right ? "Balance" : left > right ? "Left" : "Right";
};

console.log(balance("!!", "??")); //Right
console.log(balance("!!???!????", "??!!?!!!!!!!")); //Balance
console.log(balance("!?!!", "?!?")); //Left
