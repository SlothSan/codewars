/*
Binary with 0 and 1 is good, but binary with only 0 is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.

Can you write a program that can send and receive this messages?

Rules
The input message consists of ASCII characters between 32 and 127 (7-bit)
The encoded output message consists of blocks of 0
A block is separated from another block by a space
Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
First block is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
The number of 0 in the second block is the number of bits in the series
Example
Let’s take a simple example with a message which consists of only one character (Letter 'C').
'C' in binary is represented as 1000011, so with Chuck Norris’ technique this gives:
0 0 - the first series consists of only a single 1
00 0000 - the second series consists of four 0
0 00 - the third consists of two 1
So 'C' is coded as: 0 0 00 0000 0 00

Second example, we want to encode the message "CC" (i.e. the 14 bits 10000111000011) :
0 0 - one single 1
00 0000 - four 0
0 000 - three 1
00 0000 - four 0
0 00 - two 1
So "CC" is coded as: 0 0 00 0000 0 000 00 0000 0 00
Note of thanks
Thanks to the author of the original kata. I really liked this kata. I hope that other warriors will enjoy it too.

*/

const send = (message) => {
  const bin = [...message]
    .map((ch) => ch.charCodeAt(0).toString(2).padStart(7, "0"))
    .join("");
  const out = [];
  for (let i = 0; i < bin.length; ) {
    const bit = bin[i];
    let j = i;
    while (j < bin.length && bin[j] === bit) j++;
    out.push(bit === "1" ? "0" : "00", "0".repeat(j - i));
    i = j;
  }
  return out.join(" ");
};

const receive = (unary) => {
  if (!unary.trim()) return "";
  const blocks = unary.trim().split(/\s+/);
  let bits = "";
  for (let i = 0; i < blocks.length; i += 2)
    bits += (blocks[i] === "0" ? "1" : "0").repeat(blocks[i + 1].length);
  let text = "";
  for (let i = 0; i < bits.length; i += 7)
    text +=
      bits.length - i >= 7
        ? String.fromCharCode(parseInt(bits.slice(i, i + 7), 2))
        : "";
  return text;
};

console.log(send("Hello World"));
console.log(
  receive(
    "0 0 00 00 0 0 00 000 0 00 00 00 0 0 00 0 0 000 00 0 0 00 00 00 0 00 00 0 0 00 00 00 0 00 00 0 0 0000 00 0 0 0 00 00000 0 0 00 0 0 0 00 0 0 00000 00 0 0 0000000 00 00 0 0 00 0 0 00 00 0 0 00 00 00 0 00 00 00 0 0 00 00"
  )
); // Hello World
