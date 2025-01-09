/*
The value at the square you end up on determines what happens next:

    0 Stay where you are (until next turn)
    +n This is a "ladder". Go forward n places
    -n This is a "snake". Go back n places

Each snake or ladder will always end on a square with a 0, so you will only go up or down one at a time.

There are no ladders on the starting square, and there are no snakes on the final square.
Rules

    You are given a number of dice throws. The game continues until either:

    You have no throws left, OR
    You end up exactly on the final square

    At each turn, make your move, then go up the "ladders" and down the "snakes" as appropriate.

    If the dice roll overshoots the final square then you cannot move. Roll the dice again.

Task

Return the index of the array element that you ended up on at the end of the game.
Example

Start

Dice: [2, 1, 5, 1, 5, 4]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

Roll a 2. Move forward 2 squares, then go up the ladder (+3)

Dice: [2, 1, 5, 1, 5, 4]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

Roll a 1. Move forward 1 square

Dice: [2, 1, 5, 1, 5, 4]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

Roll a 5. Can't move

Dice: [2, 1, 5, 1, 5, 4]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

Roll a 1. Move forward 1 square, then go down the snake (-2)

Dice: [2, 1, 5, 1, 5, 4]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

Roll a 5. Move forward 5 squares

Dice: [2, 1, 5, 1, 5, 4]
Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]

You are on the final square so the game ends. Return 10

:-)
*/

const snakesAndLadders = (board, dice) => {
    let position = 0;
    for (let roll of dice) {
        if (position + roll >= board.length) continue;
        position += roll;
        while (board[position] !== 0) position += board[position];
        if (position === board.length - 1) return position;
    }
    return position;
};

const dice = [2, 1, 5, 1, 5, 4];
const board = [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0];

console.log(snakesAndLadders(board, dice)) //10


