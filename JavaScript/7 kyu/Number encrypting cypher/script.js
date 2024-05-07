/* 
Number encrypting: cypher
Part I of Number encrypting Katas
Introduction
Back then when the internet was coming up, most search functionalities simply looked for keywords in text to show relevant documents. Hackers weren't very keen on having their information displayed on websites, bulletin boards, newsgroups or any other place, so they started to replace certain letters in words. It started out with simple vowel substitutions like a 4 instead of an A, or a 3 instead of an E. This meant that topics like cracking or hacking remained undetected.

Here we will use a reduced version of the Leet Speak alphabet, but you can find more information here or at Wikipedia.

Task
You will receive a string composed by English words, string. You will have to return a cyphered version of that string.

The numbers corresponding to each letter are represented at the table below. Notice that different letters can share the same number. In those cases, one letter will be upper case and the other one lower case.

1	2	3	4	5	6	7	8	9	0
Upper case	I	R	E	A	S	G	T	B		O
Lower case	l	z	e	a	s	b	t		g	o

Any character that is not at the table, does not change when cyphered.

Examples
Input: "Hello World". Output: "H3110 W0r1d"
Input: "I am your father". Output: "1 4m y0ur f47h3r"
Input: "I do not know what else I can test. Be cool. Good luck". Output: "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck"
Part II
If you liked this Kata, you can find the part II: Number encrypting: decypher, where your goal is to decypher the strings.
*/

const cypher = (string) => {
  const leetAlphabet = {
    A: "4",
    a: "4",
    B: "8",
    b: "6",
    E: "3",
    e: "3",
    G: "6",
    g: "9",
    I: "1",
    O: "0",
    o: "0",
    l: "1",
    R: "2",
    S: "5",
    s: "5",
    T: "7",
    t: "7",
    Z: "2",
    z: "2",
  };

  let cypheredString = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    cypheredString += leetAlphabet[char] || char;
  }

  return cypheredString;
}

console.log(cypher("Hello World! JS is fucking crap."));
//H3110 W0r1d! J5 i5 fuckin9 cr4p.