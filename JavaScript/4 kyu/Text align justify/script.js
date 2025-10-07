/*
Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Last line should not terminate in '\n'
'\n' is not included in the length of a line.
Gaps between words can't differ by more than one space.
Lines should end with a word not a space.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Lines with one word do not need gaps ('somelongword\n').
Example with width=30:

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)
*/

const justify = (text, width) => {
  const words = text.split(" ");
  const lines = [];
  let line = [];
  let lineLen = 0;

  for (let word of words) {
    if (lineLen + word.length + line.length > width) {
      lines.push(line);
      line = [];
      lineLen = 0;
    }
    line.push(word);
    lineLen += word.length;
  }
  lines.push(line);

  return lines
    .map((line, i) => {
      if (i === lines.length - 1 || line.length === 1) {
        return line.join(" ");
      }

      const totalWordsLength = line.reduce((a, b) => a + b.length, 0);
      const totalSpaces = width - totalWordsLength;
      const gaps = line.length - 1;
      const baseSpace = Math.floor(totalSpaces / gaps);
      let extra = totalSpaces % gaps;

      let justified = "";
      for (let j = 0; j < line.length - 1; j++) {
        justified += line[j];
        justified += " ".repeat(baseSpace + (extra > 0 ? 1 : 0));
        if (extra > 0) extra--;
      }
      justified += line[line.length - 1];
      return justified;
    })
    .join("\n");
};

console.log(justify("123 45 6", 7));
/*
123  45
6
*/
