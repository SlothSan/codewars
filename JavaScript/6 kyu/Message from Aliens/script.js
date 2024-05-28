/* 
Task
Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!
*/

const decode = (m) => {
  let cipher = {
    "/\\": "a",
    "]3": "b",
    "(": "c",
    "|)": "d",
    "[-": "e",
    "/=": "f",
    "(_,": "g",
    "|-|": "h",
    "|": "i",
    _T: "j",
    "/<": "k",
    "|_": "l",
    "|\\/|": "m",
    "|\\|": "n",
    "()": "o",
    "|^": "p",
    "()_": "q",
    "/?": "r",
    "_\\~": "s",
    "~|~": "t",
    "|_|": "u",
    "\\/": "v",
    "\\/\\/": "w",
    "><": "x",
    "`/": "y",
    "~/_": "z",
    __: " ",
  };

  return m
    .split(new RegExp("[\\" + m[0] + "]+", "g"))
    .slice(1, -1)
    .map((t) => cipher[t])
    .reverse()
    .join("");
};

console.log(
  decode(
    "'''_\\~'|_|'()'|''('|'|_'[-'|)''__'_\\~'/<'()'()'|_'''__'|\\|'|''/\\'/?']3'__''/?'|_|''()'`/''"
  )
);

//your brain looks delicious
