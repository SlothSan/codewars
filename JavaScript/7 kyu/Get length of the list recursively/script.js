/*
Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
*/

const lenR = ([head, ...tail]) => {
  if (!head) return 0;
  return 1 + lenR(tail);
};

console.log(lenR([1])); //1
