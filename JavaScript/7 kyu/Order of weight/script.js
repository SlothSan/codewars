/*
Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.
*/

const arrange = (arr) => {
  const sortWeight = (weight) => {
    if (weight.slice(-2) === "KG") return weight.slice(0, -2) * 1;
    else if (weight.slice(-1) === "T") return weight.slice(0, -1) * 1000;
    else return weight.slice(0, -1) * 0.001;
  };
  return arr.sort((a, b) => sortWeight(a) - sortWeight(b));
};

console.log(arrange(["4T", "300G", "450G", "900KG"]));
