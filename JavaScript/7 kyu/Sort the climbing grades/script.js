/*
My 5th kata, and 1st in a planned series of rock climbing themed katas.

In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade). You will be given a list (lst) of climbing grades and you have to write a function (sort_grades) to return a list of the grades sorted easiest to hardest.

If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

Please do vote, rank, and provide any feedback on the kata.
*/

const sortGrades = (lst) => {
  if (!lst) return [];
  const gradeValues = {
    VB: 0,
    V0: 1,
    "V0+": 1.5,
    V1: 2,
    V2: 3,
    V3: 4,
    V4: 5,
    V5: 6,
    V6: 7,
    V7: 8,
    V8: 9,
    V9: 10,
    V10: 11,
    V11: 12,
    V12: 13,
    V13: 14,
    V14: 15,
    V15: 16,
    V16: 17,
    V17: 18,
  };

  return lst.sort((a, b) => gradeValues[a] - gradeValues[b]);
};

console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]));

//[ 'VB', 'V0', 'V0+', 'V2', 'V6', 'V16' ]
