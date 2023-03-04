/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/
const pillars = (numPill, dist, width) => {
  let distCm = dist * 100;
  let totalDist = 0;
  if (numPill === 1) return 0;
  if (numPill === 2) return distCm;
  for (let i = 0; i < numPill; i++) {
    totalDist += distCm + width;
  }
  totalDist -= distCm;
  return (totalDist -= 2 * width);
};

console.log(pillars(2, 20, 25)); //2000
