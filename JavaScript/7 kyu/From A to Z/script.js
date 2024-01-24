const gimmeTheLetters = (sp) => {
  let startOfRange = sp[0].charCodeAt(0);
  let endOfRange = sp[2].charCodeAt(0);

  if (startOfRange === endOfRange) return sp[0];

  let result = "";

  for (let i = startOfRange; i <= endOfRange; i++) {
    result += String.fromCharCode(i);
  }

  return result;
};

console.log(gimmeTheLetters("a-z"));
//abcdefghijklmnopqrstuvwxyz
