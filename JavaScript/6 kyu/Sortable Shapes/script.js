/*
Although shapes can be very different by nature, they can be sorted by the size of their area.

Task:

Create different shapes that can be part of a sortable list. The sort order is based on the size of their respective areas:
The area of a Square is the square of its side
The area of a Rectangle is width multiplied by height
The area of a Triangle is base multiplied by height divided by 2
The area of a Circle is the square of its radius multiplied by π
The area of a CustomShape is given

The default sort order of a list of shapes is ascending on area size:
let side = 1.1234;
let radius = 1.1234;
let base = 5;
let height = 2;

let shapes = [ new Square(side)
             , new Circle(radius)
             , new Triangle(base, height)
             ];
shapes.sort( (a,b) => Number(a>b)-Number(a<b) ); // instead of the default lexicographical sort, natural sort will be used
Use the correct π constant for your circle area calculations:
Math.PI
*/

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate Shape directly");
    }
  }

  area() {
    throw new Error("area() not implemented");
  }

  valueOf() {
    return this.area();
  }

  toString() {
    return `${this.constructor.name}(area=${this.area()})`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class CustomShape extends Shape {
  constructor(areaValue) {
    super();
    this._area = areaValue;
  }
  area() {
    return this._area;
  }
}

let side = 1.1234;
let radius = 1.1234;
let base = 5;
let height = 2;

let shapes = [
  new Square(side),
  new Circle(radius),
  new Triangle(base, height),
  new Rectangle(2, 3),
  new CustomShape(10),
];

shapes.sort((a, b) => Number(a > b) - Number(a < b));

console.log(shapes);
/*
[
  Square { side: 1.1234 },
  Circle { radius: 1.1234 },
  Triangle { base: 5, height: 2 },
  Rectangle { width: 2, height: 3 },
  CustomShape { _area: 10 }
]

*/
