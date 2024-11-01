/*
Task
Raj has got into a problem, he solved the triangle pattern but stuck in the codes of "inverse triangle". Help him with the codes and remember to get the output as per given in examples below.

Rules:
Take input as 'n' which is always a natural number
Space between each digit
No space after the rows end
Examples
pattern(5)

1 1 1 1 1
 2 2 2 2
  3 3 3
   4 4
    5
    
    
pattern(9)

  1 1 1 1 1 1 1 1 1
   2 2 2 2 2 2 2 2
    3 3 3 3 3 3 3
     4 4 4 4 4 4
      5 5 5 5 5
       6 6 6 6
        7 7 7
         8 8
          9
        
        
pattern(16)

1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
  3 3 3 3 3 3 3 3 3 3 3 3 3 3
   4 4 4 4 4 4 4 4 4 4 4 4 4
    5 5 5 5 5 5 5 5 5 5 5 5
     6 6 6 6 6 6 6 6 6 6 6
      7 7 7 7 7 7 7 7 7 7
       8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9
         0 0 0 0 0 0 0
          1 1 1 1 1 1
           2 2 2 2 2
            3 3 3 3
             4 4 4
              5 5
               6
*/

const pattern = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(" ".repeat(i) + ((i % 10) + " ").repeat(n - i + 1).trim());
  }
  return result.join("\n");
};

console.log(pattern(16));
/*
 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
  2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
   3 3 3 3 3 3 3 3 3 3 3 3 3 3
    4 4 4 4 4 4 4 4 4 4 4 4 4
     5 5 5 5 5 5 5 5 5 5 5 5
      6 6 6 6 6 6 6 6 6 6 6
       7 7 7 7 7 7 7 7 7 7
        8 8 8 8 8 8 8 8 8
         9 9 9 9 9 9 9 9
          0 0 0 0 0 0 0
           1 1 1 1 1 1
            2 2 2 2 2
             3 3 3 3
              4 4 4
               5 5
                6
*/
