/*
Freestyle Sparring
Take turns remixing and refactoring others code through Kumite
Career
Opportunities
Find your next career challenge – powered by Andela
Community
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
About

    Docs
    Learn about all of the different aspects of Codewars

    SlothSan Avatar
    2 kyu
    5,541

7 kyu
Matrix creation
251191% of 3201,421 of 2,066Dmitry Kudla

    JavaScript
    Node v8.1.3

        VIM
        EMACS

Instructions
Output

Create an identity matrix of the specified size( >= 0).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   

*/

const getMatrix = (number) => {
  let result = [];
  for (let i = 0; i < number; i++) {
    result[i] = Array(number).fill(0);
    result[i][i] = 1;
  }
  return result;
};

console.log(getMatrix(4));
//[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
