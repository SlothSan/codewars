/*
You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.
*/

const lowestTemp = (t) => {
  return t.length > 1
    ? Math.min(...t.split(" ").map((curr) => Number(curr)))
    : null;
};

console.log(lowestTemp("-1 50 -4 20 22 -7 0 10 -8"));
//-8
