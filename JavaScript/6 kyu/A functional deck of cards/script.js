/* 
Your task should you chose to accept...

Build a deck of playing cards by generating 52 strings representing cards. There are no jokers.

Each card string will have the format of:

"ace of hearts"
"ace of spades"
"ace of diamonds"
"ace of clubs"

And will consist of the following ranks:

ace two three four five
six seven eight nine ten
jack queen king

They do not need to be in order.
Additional constraints

    1 line only!
    buildDeck is a variable holding your deck. It is not a function.
*/

const buildDeck = [].concat(
  ...["hearts", "spades", "diamonds", "clubs"].map((suit) =>
    [
      "ace",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "jack",
      "queen",
      "king",
    ].map((rank) => `${rank} of ${suit}`)
  )
);

console.log(buildDeck);
/*
[
  'ace of hearts',     'two of hearts',     'three of hearts',
  'four of hearts',    'five of hearts',    'six of hearts',
  'seven of hearts',   'eight of hearts',   'nine of hearts',
  'ten of hearts',     'jack of hearts',    'queen of hearts',
  'king of hearts',    'ace of spades',     'two of spades',
  'three of spades',   'four of spades',    'five of spades',
  'six of spades',     'seven of spades',   'eight of spades',
  'nine of spades',    'ten of spades',     'jack of spades',
  'queen of spades',   'king of spades',    'ace of diamonds',
  'two of diamonds',   'three of diamonds', 'four of diamonds',
  'five of diamonds',  'six of diamonds',   'seven of diamonds',
  'eight of diamonds', 'nine of diamonds',  'ten of diamonds',
  'jack of diamonds',  'queen of diamonds', 'king of diamonds',
  'ace of clubs',      'two of clubs',      'three of clubs',
  'four of clubs',     'five of clubs',     'six of clubs',
  'seven of clubs',    'eight of clubs',    'nine of clubs',
  'ten of clubs',      'jack of clubs',     'queen of clubs',
  'king of clubs'
]
*/
