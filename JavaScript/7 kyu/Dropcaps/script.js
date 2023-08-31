/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.
*/

const dropCap = (n) => {
  return n
    .split(" ")
    .map((word) => {
      if (word.length > 2) {
        return word
          .split("")
          .map((letter, index) => {
            if (index === 0) {
              return letter.toUpperCase();
            } else {
              return letter.toLowerCase();
            }
          })
          .join("");
      } else {
        return word;
      }
    })
    .join(" ");
};

console.log(
  dropCap(
    "Revelation of the contents outraged American public opinion, and helped generate"
  )
);
//Revelation of The Contents Outraged American Public Opinion, And Helped Generate
