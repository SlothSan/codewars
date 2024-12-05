const nthterm = (first, n, c) => {
  let curr = first;
  let count = 0;
  while (count < n) {
    curr += c;
    count++;
  }
  return curr;
};

console.log(nthterm(-50, 10, 20));
