/*
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/

const sorter = (textbooks) => {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  );
};

console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]));
//[ '$istory', '**english', 'Alg#bra', 'Geom^try' ]
