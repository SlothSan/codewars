/* 
Write a function that takes as its parameters one or more numbers which are the diameters of circles.

The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".

You don't know how many circles you will be given, but you can assume it will be at least one.

So:

sumCircles(2) == "We have this much circle: 3"
sumCircles(2, 3, 4) == "We have this much circle: 23"
Translations and comments (and upvotes!) welcome!
*/

const sumCircles = (...diameters) => {
  const totalArea = diameters.reduce((acc, diameter) => {
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    return acc + area;
  }, 0);

  return `We have this much circle: ${Math.round(totalArea)}`;
};

console.log(sumCircles(1, 2, 3, 4));
//We have this much circle: 24