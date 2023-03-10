/*
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?
*/

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives >= 1) {
      if (n !== this.number) {
        this.lives--;
        return false;
      } else {
        return true;
      }
    } else {
      throw Error("already dead");
    }
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(10)); // true
console.log(guesser.guess(2));
console.log(guesser.guess(2)); //false
console.log(guesser.guess(3)); // Error: already dead
