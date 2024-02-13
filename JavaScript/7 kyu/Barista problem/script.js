const barista = (coffees) => {
  return coffees
    .sort((a, b) => a - b)
    .reduce(
      (acc, curr, index) => acc + curr * (coffees.length - index) + 2 * index,
      0
    );
};

console.log(barista([2, 10, 5, 3, 9]));
//85
