const duplicateItems = (arr, numberOfRepetitions) =>
  arr.map((i) => Array.from({ length: numberOfRepetitions }).fill(i));
const scale = (strng, k, n) => {
  strng = strng.split("\n").map((word) => {
    return word
      .split("")
      .map((letter) => {
        return letter.repeat(k);
      })
      .join("");
  });
  return (strng = duplicateItems(strng, n).flat().join("\n"));
};

console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3));
