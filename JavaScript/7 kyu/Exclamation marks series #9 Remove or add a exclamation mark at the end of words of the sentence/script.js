/*
Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

Examples
"Hi!"            ---> "Hi"
"Hi! Hi!"        ---> "Hi Hi"
"Hi! Hi"         ---> "Hi Hi!"
"Hi! Hi Hi!!"    ---> "Hi Hi! Hi!!"
"!Hi! !Hi !Hi!!" ---> "!Hi !Hi! !Hi!!"
*/

const removeOrAdd = (string) =>
  string
    .split(" ")
    .map((word) =>
      word.endsWith("!") && word[word.length - 2] !== "!"
        ? word.slice(0, -1)
        : !word.endsWith("!")
        ? word + "!"
        : word
    )
    .join(" ");

console.log(removeOrAdd("Hi! Hi!! Hi"));
//Hi Hi!! Hi!
