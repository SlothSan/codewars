/*
This series of katas will introduce you to basics of doing geometry with computers.

Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
The Circle class can be seen below:

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

And the Point class can be seen below:

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

Tests round answers to 6 decimal places.

*/

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}

// Represents a Point where x and y are Numbers
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function circleArea({ radius }) {
  return radius * radius * Math.PI;
}

console.log(+circleArea(new Circle(new Point(10, 10), 30)).toFixed(6));
//2827.433388
