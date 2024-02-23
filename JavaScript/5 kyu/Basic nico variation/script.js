/*
Task
Write a function nico/nico() that accepts two parameters:

key/$key - string consists of unique letters and digits
message/$message - string to encode
and encodes the message using the key.

First create a numeric key basing on a provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
Let's encode secretinformation using our crazy key.

2 3 1 5 4
---------
s e c r e
t i n f o
r m a t i
o n
After using the key:

1 2 3 4 5
---------
c s e e r
n t i o f
a r m i t
  o n   
Examples
nico("crazy", "secretinformation") => "cseerntiofarmit on  "
nico("abc", "abcd") => "abcd  "
nico("ba", "1234567890") => "2143658709" 
nico("key", "key") => "eky" 
Check the test cases for more samples.

Collection
Basic DeNico - if you like this kata , try to decode the message in the next kata


*/

const nico = (key, message) => {
  const messageLength = message.length;
  const keyLength = key.length;
  const part = Math.ceil(message.length / key.length);

  let map = {};

  let mask = key
    .split("")
    .sort()
    .map((e, i) => [e, i + 1])
    .sort((a, b) => key.indexOf(a[0]) - key.indexOf(b[0]))
    .map((e) => e[1]);

  for (let i = 0; i < keyLength; i++) {
    let temp = "";
    for (let j = i; j < messageLength; j += keyLength) {
      temp += message[j];
    }
    temp.length < part ? (temp += " ".repeat(part - temp.length)) : undefined;
    map[mask.shift()] = temp.split("");
  }

  let result = "";

  while (Object.keys(map).every((e) => map[e].length != 0)) {
    Object.keys(map).forEach((e) => (result += map[e].shift()));
  }

  return result;
};

console.log(nico("crazy", "secretinformation")); //cseerntiofarmit on 
