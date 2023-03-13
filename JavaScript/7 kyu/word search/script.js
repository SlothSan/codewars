const wordSearch = (query, seq) => {
  let regex = new RegExp(query, "i");
  let results = seq.filter((s) => regex.test(s));
  return results.length ? results : ["Empty"];
};

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])); //[ab, abc, zab];
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])); //[Empty]
