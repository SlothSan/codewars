/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

const rpsls = (pl1, pl2) => {
  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"],
  };

  if (pl1 === pl2) {
    return "Draw!";
  } else if (rules[pl1].includes(pl2)) {
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
};

console.log(rpsls("lizard", "paper"));
//Player 1 Won!
