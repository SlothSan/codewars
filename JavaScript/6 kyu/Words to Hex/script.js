/*
Each word will represent a hexadecimal value by taking the first three letters of each word and find the ASCII character code for each character. This will then give you one hexadecimal value that represents the colours red, green or blue. You will then combine these values into one readable RGB hexadecimal value, e.g. #ffffff.

If your word consists of less than 3 letters, you should use the hexidecimal value 00, ie "It" would return a value #497400.

Your answer should be an array of hexadecimal values that correspond to each word that made up your original string.

Example
The following string would be given:

"Hello, my name is Gary and I like cheese."

This string would return the following array:

['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865'
*/

const toHex = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
};

const wordsToHex = (words) => {
  return words.split(" ").map((curr) => {
    let hex = toHex(curr);
    if (hex.length > 6) {
      return `#${hex.slice(0, 6)}`;
    } else {
      return `#${hex.padEnd(6, "0")}`;
    }
  });
};

console.log(wordsToHex("Hello World!"));
//[ '#48656c', '#576f72' ]
