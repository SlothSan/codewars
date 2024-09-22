/*
Task

Make a custom esolang interpreter for the language Tick. Tick is a descendant of Ticker but also very different data and command-wise.
Syntax/Info

Commands are given in character format. Non-command characters should be ignored. Tick has an potentially infinite memory as opposed to Ticker(which you have a special command to add a new cell) and only has 4 commands(as opposed to 7). Read about this esolang here.
Commands

>: Move data selector right

<: Move data selector left(infinite in both directions)

+: Increment memory cell by 1. 255+1=0

*: Add ascii value of memory cell to the output tape.
*/

const interpreter = (program) => {
  let tape = [0];
  let pointer = 0;
  let output = [];

  for (let i = 0; i < program.length; i++) {
    let command = program[i];
    if (command === ">") {
      pointer++;
      if (pointer >= tape.length) tape.push(0);
    } else if (command === "<") {
      pointer--;
      if (pointer < 0) {
        tape.unshift(0);
        pointer = 0;
      }
    } else if (command === "+") {
      tape[pointer] = (tape[pointer] + 1) % 256;
    } else if (command === "*") {
      output.push(String.fromCharCode(tape[pointer]));
    }
  }
  return output.join("");
};

console.log(interpreter('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*'))
