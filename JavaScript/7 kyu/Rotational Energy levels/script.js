/*
Quantum mechanics tells us that a molecule is only allowed to have specific, discrete amounts of internal energy. The 'rigid rotor model', a model for describing rotations, tells us that the amount of rotational energy a molecule can have is given by:

E =  B * J * (J + 1),

where J is the state the molecule is in, and B is the 'rotational constant' (specific to the molecular species).

Write a function that returns an array of allowed energies for levels between Jmin and Jmax.

Notes:

return empty array if Jmin is greater than Jmax (as it make no sense).
Jmin, Jmax are integers.
physically B must be positive, so return empty array if B <= 0
*/

const rotEnergies = (b, jMin, jMax) => {
  let res = [];
  if (b <= 0) return res;

  const rotationalEnergy = (b, j) => {
    return b * j * (j + 1);
  };

  for (let i = jMin; i <= jMax; i++) {
    res.push(rotationalEnergy(b, i));
  }

  return res;
};

console.log(rotEnergies(10, 15, 100));
/*
[
   2400,   2720,  3060,  3420,  3800,  4200,  4620,
   5060,   5520,  6000,  6500,  7020,  7560,  8120,
   8700,   9300,  9920, 10560, 11220, 11900, 12600,
  13320,  14060, 14820, 15600, 16400, 17220, 18060,
  18920,  19800, 20700, 21620, 22560, 23520, 24500,
  25500,  26520, 27560, 28620, 29700, 30800, 31920,
  33060,  34220, 35400, 36600, 37820, 39060, 40320,
  41600,  42900, 44220, 45560, 46920, 48300, 49700,
  51120,  52560, 54020, 55500, 57000, 58520, 60060,
  61620,  63200, 64800, 66420, 68060, 69720, 71400,
  73100,  74820, 76560, 78320, 80100, 81900, 83720,
  85560,  87420, 89300, 91200, 93120, 95060, 97020,
  99000, 101000
]
*/
