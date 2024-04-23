/*
Make me a window. I'll give you a number (N). You return a window.

Rules:

The window will always be 2 x 2.

The window needs to have N number of periods across and N number of periods vertically in each pane.

Example:

N = 3

---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
Note: there should be no trailing new line characters at the end.
*/

const makeAWindow = (num) => {
  let window = [];
  let totalRows = num * 2 + 3;
  let periods = ".".repeat(num);
  let dividers = "-".repeat(num);
  let pane = `|${periods}|${periods}|`;
  let divider = `|${dividers}+${dividers}|`;
  let header = `${"-".repeat(totalRows)}`;

  window.push(header);

  for (let i = 0; i < num; i++) {
    window.push(pane);
  }

  window.push(divider);

  for (let i = 0; i < num; i++) {
    window.push(pane);
  }

  window.push(header);

  return window.join("\n");
};

console.log(makeAWindow(3));
/* 
---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
*/
