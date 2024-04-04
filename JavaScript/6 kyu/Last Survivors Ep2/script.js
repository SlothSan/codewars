/* 
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
If you like this kata, check out another one: Last Survivor Ep.3
*/

const lastSurvivors = (str) => {
  let origin = str;
  str = [...str].sort().join("");
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      str =
        str.substring(0, i) +
        (str[i] > "y" ? "a" : String.fromCharCode(str.charCodeAt(i) + 1)) +
        str.substring(i + 2);
    }
  }
  return str === origin ? str : lastSurvivors(str);
};

console.log(
  lastSurvivors(
    "xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"
  )
);
//acdeghlmnqrvyz
