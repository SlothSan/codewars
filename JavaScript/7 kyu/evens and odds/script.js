function evensAndOdds(num) {
  //if even convert to binary.
  if (num % 2 === 0) {
    return num.toString(2);
  }
  //else convert to hex
  return num.toString(16);
}
