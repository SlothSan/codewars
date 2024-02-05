/*
We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.

Your mission is to write a function which removes this noise from the message.

Notice that noise can only be %$&/#·@|º\ª characters, other characters are not as considered noise

For example:

removeNoise("h%e&·%$·llo w&%or&$l·$%d")
// returns hello world
*/

const removeNoise = (str) => {
  const noiseCharacters = new Set([
    "%",
    "$",
    "&",
    "/",
    "#",
    "·",
    "@",
    "|",
    "º",
    "\\",
    "ª",
  ]);
  return str
    .split("")
    .filter((char) => !noiseCharacters.has(char))
    .join("");
};

console.log(removeNoise("h%e&·%$·llo w&%or&$l·$%d"));
//hello world
