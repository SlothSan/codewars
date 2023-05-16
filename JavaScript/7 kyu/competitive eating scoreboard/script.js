/*
You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points

Hamburgers: 3 points

Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
Happy judging!
*/

const scoreboard = (whoAteWhat) => {
  return whoAteWhat
    .map((person) => {
      let score =
        person.chickenwings * 5 + person.hamburgers * 3 + person.hotdogs * 2;
      return { name: person.name, score: score };
    })
    .sort((a, b) => {
      return a.score < b.score
        ? 1
        : a.score > b.score
        ? -1
        : a.name < b.name
        ? -1
        : a.name > b.name
        ? 1
        : 0;
    });
};

console.log(
  scoreboard([
    { name: "Gomes", chickenwings: 59, hotdogs: 42, hamburgers: 73 },
    { name: "Marko Sustarsic", chickenwings: 24, hotdogs: 16, hamburgers: 1 },
    {
      name: "Laura - definitely not a beginner",
      chickenwings: 41,
      hotdogs: 43,
      hamburgers: 64,
    },
    { name: "Andrew badass C.", chickenwings: 29, hotdogs: 75, hamburgers: 39 },
    { name: "Nelson", chickenwings: 41, hotdogs: 43, hamburgers: 64 },
    { name: "Pete Garvin", chickenwings: 58, hotdogs: 5, hamburgers: 93 },
    { name: "Alex", chickenwings: 41, hotdogs: 73, hamburgers: 6 },
    { name: "Daymos", chickenwings: 90, hotdogs: 23, hamburgers: 49 },
    {
      name: "Rory the kickass developer",
      chickenwings: 80,
      hotdogs: 21,
      hamburgers: 38,
    },
    { name: "GFortaine", chickenwings: 11, hotdogs: 34, hamburgers: 50 },
  ])
);
