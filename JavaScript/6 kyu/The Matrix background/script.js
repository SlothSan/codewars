/*
Overview:
In order to recreate this unique background animation, you will be constructing the two main components classes.

The animation consists of many streams of letters. As such, you will be defining the Letter class and the Stream class.

Instructions:
Create the Letter class

Each Letter object should be initialized with the following parameters:

x [number] : the X coordinate for the letter
y [number] : the Y coordinate for the letter
speed [number] : the speed the letter moves
first [boolean] : true if the letter is the first in the stream
opacity [number] : The opacity of the letter (0-255)
height [number] : The height of the canvas
characters [string] : A string of possible characters for the Letter object
NOTE: These parameters should match to a corresponding property of the appropriate name. For example:

``` function Letter(opacity){ this.opacity = opacity; } ```
Each Letter object should also be initialized with the following default properties:

.switchInterval [number] : a random integer between 2 (inclusive) and 25 (exclusive)
.value [string] : The character string of the letter, which should be an empty string
Each Letter object should have the following methods:

.changeLetter() : changes the .value property to a random character from the .characters property. The length of the string in .value property should be a single character (length of 1).
.move() : increase the .y property by the .speed property. However, if the .y property is greater than or equal to the .height property, the .y property is set to 0
Create the Stream class

Each Stream object should be initialized with the following parameters:

minSpd [number] : the minimum speed for letters in the stream
maxSpd [number] : the maximum speed for letters in the stream
Each Stream object should also be initialized with the following default properties:

.symbols [array] : an empty array, which will be used to store Letter objects
.totalSymbols [number] : a random number between 5 (inclusive) and 35 (exclusive). This represents the number of Letter objects in the .symbols array
.speed [number] : a random number between the minSpd parameter (inclusive) and the maxSpd parameter (exclusive)
Each Stream object should have the following method:

.newSpeed() : if the first Letter object in the .symbols array has an .x property less than or equal to 0 the .speed property of the Stream object is changed to another random number between the minSpd parameter and the maxSpd parameter
*/

class Letter {
  constructor(x, y, speed, first, opacity, height, characters) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.first = first;
    this.opacity = opacity;
    this.height = height;
    this.characters = characters;

    this.switchInterval = Math.floor(Math.random() * 23) + 2;
    this.value = "";
  }

  changeLetter() {
    this.value =
      this.characters[Math.floor(Math.random() * this.characters.length)];
  }

  move() {
    this.y += this.speed;
    if (this.y >= this.height) {
      this.y = 0;
    }
  }
}

class Stream {
  constructor(minSpd, maxSpd) {
    this.minSpd = minSpd;
    this.maxSpd = maxSpd;

    this.symbols = [];
    this.totalSymbols = Math.floor(Math.random() * 30) + 5;
    this.speed = Math.random() * (maxSpd - minSpd) + minSpd;
  }

  newSpeed() {
    if (this.symbols.length > 0 && this.symbols[0].x <= 0) {
      this.speed = Math.random() * (this.maxSpd - this.minSpd) + this.minSpd;
    }
  }
}
