/*Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata. */

const reverse = (str) => {
  //Remove leading and trailing whitespace
  str = str.trim();
  //make an array ready to reverse the strings
  let strArray = str.split(" ");
  //Iterate through the strArray and reverse every other string in the array,
  for (let i = 1; i < strArray.length; i += 2) {
    let string = strArray[i].split("").reverse().join("");
    strArray[i] = string;
  }
  return strArray.join(" ");
};

console.log(reverse("Reverse this string, please!")); //Expected output "Reverse siht string, !esaelp"
