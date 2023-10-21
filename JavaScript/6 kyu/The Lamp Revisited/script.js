/*
Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.

Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.

Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.

*/

class Lamp {
  constructor(color) {
    this.on = false;
    this.color = color;
  }

  state() {
    return `The lamp is ${this.on ? "on" : "off"}.`;
  }

  toggleSwitch() {
    return (this.on = !this.on);
  }
}

const lamp = new Lamp("Blue");
console.log(
  lamp.color,
  lamp.on,
  lamp.state(),
  lamp.toggleSwitch(),
  lamp.state()
);
//Blue false The lamp is off. true The lamp is on
