/*
Task
You are given a string s. Your task is to count the number of each letter (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

Example
For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:

          *
          *
          *
*       * *
* *   * * *
* * * * * *
A B C X Y Z
Rules
You just need to count the uppercase letters. Any other character will be ignored.
Using * to represent the number of characters.
The order of output is form A to Z. Characters that do not appear in the string are ignored.
To beautify the histogram, there is a space between every pair of columns.
There are no extra spaces at the end of each row. Also, use "\n" to separate rows.
Happy Coding ^_^
*/

const verticalHistogramOf = (string) => {
  const counts = [...string].reduce((map, character) => {
    if (character >= "A" && character <= "Z")
      map[character] = (map[character] || 0) + 1;
    return map;
  }, {});

  const letters = Object.keys(counts).sort();
  const maxHeight = Math.max(...letters.map((letter) => counts[letter]), 0);

  const rows = Array.from({ length: maxHeight }, (_, index) => {
    const level = maxHeight - index;
    return letters
      .map((letter) => (counts[letter] >= level ? "*" : " "))
      .join(" ")
      .replace(/\s+$/, "");
  });

  return [...rows, letters.join(" ")].join("\n");
};

console.log(verticalHistogramOf("AAABBC"));

/*
*
* *
* * *
A B C
 */
