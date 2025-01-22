const whitespaceNumber = (n) => {
  if (n === 0) {
    return " \n";
  }
  const sign = n > 0 ? " " : "\t";
  const binary = Math.abs(n).toString(2);
  const binaryWhitespace = binary
    .split("")
    .map((bit) => (bit === "0" ? " " : "\t"))
    .join("");

  return sign + binaryWhitespace + "\n";
};

console.log(whitespaceNumber(-1)); // "\t\t\n"
