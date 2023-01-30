/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript */

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const generateHashtag = (str) => {
  str = str.trim();
  if (str === "") return false;
  let strArray = str
    .split(" ")
    .filter((element) => element !== " ")
    .map((word) => capitalizeFirst(word));

  let hashtagString = strArray.join("");
  console.log(hashtagString.length, hashtagString);
  if (hashtagString.charAt(0) !== "#") {
    hashtagString = "#" + hashtagString;
  }
  return hashtagString.length <= 140 ? hashtagString : false;
};
