/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

const sevenAte9 = (string) => {
  return string.replace(/79(?=7)/g, "7");
};

console.log(sevenAte9("79797")); // Expect 777
