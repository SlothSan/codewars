/*
Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...
Some easy examples:
Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"
I think it's clear?! First there are some static tests, later on random tests too...

Hope you have fun! :-)
*/


const reverse_and_combine_text = (str) => {
  const reverseWord = (word) => word.split("").reverse().join("");
  let words = str.split(" ");
  while (words.length > 1) {
    words = words.reduce((result, word, index) => {
      if (index % 2 === 0) {
        if (index + 1 < words.length) {
          result.push(reverseWord(word) + reverseWord(words[index + 1]));
        } else {
          result.push(reverseWord(word));
        }
      }
      return result;
    }, []);
  }
  return words[0];
};

console.log(
  reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44")
);
//trzwqfdstrteettr45hh4325543544hjhjh21lllll
