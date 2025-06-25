/*
Task
You will receive a string consisting of lowercase letters, uppercase letters and digits as input. Your task is to return this string as blocks separated by dashes ("-"). The elements of a block should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple instances of the same character. Elements should be put into the first suitable block.

The hierarchy is:

lowercase letters (a - z), in alphabetical order
uppercase letters (A - Z), in alphabetical order
digits (0 - 9), in ascending order
Examples
"21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
"abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
"" -> "" - an empty input should result in an empty output
"hbh420sUUW222IWOxndjn93cdop69NICEep832" -> "bcdehjnopsxCEINOUW0234689-dhnpIUW239-2-2-2" - a more sophisticated example
Good luck!
*/

const blocks = (str) => {
  if (!str) return "";

  const counts = {};
  for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;

  const lowers = [..."abcdefghijklmnopqrstuvwxyz"].filter((c) => counts[c]);
  const uppers = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].filter((c) => counts[c]);
  const digits = [..."0123456789"].filter((c) => counts[c]);

  const order = [...lowers, ...uppers, ...digits];
  const max = Math.max(...Object.values(counts));

  const blocks = [];

  for (let i = 1; i <= max; i++) {
    let block = "";
    for (const ch of order) if (counts[ch] >= i) block += ch;
    blocks.push(block);
  }

  return blocks.join("-");
};

console.log(blocks("21AxBz")); //xzAB12
