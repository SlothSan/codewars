/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

const angle = (n) => {
  return (n - 2) * 180;
};

console.log(angle(3)); //180
