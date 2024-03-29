/*
You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.

Adapted from: Ruby Kickstart
*/

const comes_after = (str, l) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === l.toLowerCase()) {
      if (i !== str.length - 1 && /[a-zA-Z]/.test(str[i + 1])) {
        result += str[i + 1];
      }
    }
  }
  return result;
};

console.log(comes_after("Free coffee for all office workers!", "f"));
//rfeofi
