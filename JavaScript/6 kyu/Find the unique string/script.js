/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

Find the unique number
Find the unique string (this kata)
Find The Unique

const findUniq = (arr) => {
  const normalize = (str) =>
    [...new Set(str.toLowerCase().replace(/\s+/g, "").split(""))]
      .sort()
      .join("");

  const mapped = arr.map((str) => normalize(str));
  const counts = mapped.reduce((acc, key) => {
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const uniqueKey = Object.keys(counts).find((k) => counts[k] === 1);
  return arr[mapped.findIndex((k) => k === uniqueKey)];
};

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
