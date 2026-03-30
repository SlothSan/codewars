/*
Write a function that removes all odd number continuous exclamation marks and question marks in a string, repeat this operation until no continuous exclamation marks and question marks of odd length exist.

Please note: One exclamation mark or question mark is not continuous exclamation marks or question marks.

The string contains only ! and ?.

Examples
"" --> ""
"!" --> "!"
"!!" --> "!!"
"!!!" --> ""
"!??" --> "!??"
"!???" --> "!"
"!!!??" --> "??"
"!!!???" --> ""
"!???!!" --> "!!!" --> ""
"!????!!!?" --> "!?????" --> "!"
*/

const remove = (s) => {
  let prev;

  do {
    prev = s;
    s = s.replace(/([!?])\1+/g, (group) =>
      group.length % 2 === 1 ? "" : group,
    );
  } while (s !== prev);

  return s;
};

console.log(remove("!!!???")); // ''
