const damagedOrSunk = (board, attacks) => {
  let ships = { 1: 0, 2: 0, 3: 0 },
    hits = { 1: 0, 2: 0, 3: 0 },
    sunk = 0,
    damaged = 0,
    notTouched = 0,
    points = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) ships[board[i][j]] += 1;
    }
  }

  for (let i = 0; i < attacks.length; i++) {
    let ship = board[board.length - attacks[i][1]][attacks[i][0] - 1];
    if (ship > 0) hits[ship] += 1;
  }

  for (let i = 1; i <= 3; i++) {
    if (ships[i] !== 0) {
      ships[i] -= hits[i];
      if (ships[i] === 0) {
        points += 1;
        sunk += 1;
      } else {
        if (hits[i] === 0) {
          notTouched += 1;
          points -= 1;
        } else {
          damaged += 1;
          points += 0.5;
        }
      }
    }
  }

  return {
    sunk: sunk,
    damaged: damaged,
    notTouched: notTouched,
    points: points,
  };
};

let board = [
  [3, 0, 1],
  [3, 0, 1],
  [0, 2, 1],
  [0, 2, 0],
];

let attacks = [
  [2, 1],
  [2, 2],
  [3, 2],
  [3, 3],
];
let result = damagedOrSunk(board, attacks);

console.log(result.damaged, result.notTouched, result.points, result.sunk);
