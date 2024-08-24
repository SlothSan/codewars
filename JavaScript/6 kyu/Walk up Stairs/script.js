/* 
Raj was to move up through a pattern of stairs of a given number (n). Help him to get to the top using the function stairs.

##Keep in mind :

If n<1 then return ' ' .
There are a lot of spaces before the stair starts except for pattern(1)
##Examples : pattern(1)

      1 1
pattern(6)

                      1 1
                  1 2 2 1  
              1 2 3 3 2 1
          1 2 3 4 4 3 2 1
      1 2 3 4 5 5 4 3 2 1
  1 2 3 4 5 6 6 5 4 3 2 1
pattern(12)

                                              1 1
                                          1 2 2 1
                                      1 2 3 3 2 1
                                  1 2 3 4 4 3 2 1
                              1 2 3 4 5 5 4 3 2 1
                          1 2 3 4 5 6 6 5 4 3 2 1
                      1 2 3 4 5 6 7 7 6 5 4 3 2 1
                  1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
              1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
          1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1
      1 2 3 4 5 6 7 8 9 0 1 1 0 9 8 7 6 5 4 3 2 1
  1 2 3 4 5 6 7 8 9 0 1 2 2 1 0 9 8 7 6 5 4 3 2 1
*/

const stairs = (n) => {
  if (n < 1) return " ";

  let result = "";
  const maxWidth = (n * 2 - 1) * 2;

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += (j % 10) + " ";
    for (let j = i; j >= 1; j--) row += (j % 10) + " ";
    row = row.trim();
    let spaces = " ".repeat(maxWidth - (i * 2 - 1) * 2);
    result += spaces + row + (i === n ? "" : "\n");
  }

  return result;
};

console.log(stairs(12));
/*
                                            1 1
                                        1 2 2 1
                                    1 2 3 3 2 1
                                1 2 3 4 4 3 2 1
                            1 2 3 4 5 5 4 3 2 1
                        1 2 3 4 5 6 6 5 4 3 2 1
                    1 2 3 4 5 6 7 7 6 5 4 3 2 1
                1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
            1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
        1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1
    1 2 3 4 5 6 7 8 9 0 1 1 0 9 8 7 6 5 4 3 2 1
1 2 3 4 5 6 7 8 9 0 1 2 2 1 0 9 8 7 6 5 4 3 2 1
*/
