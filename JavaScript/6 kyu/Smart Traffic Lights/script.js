/*
Story
Your friend Bob is working as a taxi driver. After working for a month he is frustrated in the city's traffic lights. He asks you to write a program for a new type of traffic light. It is made so it turns green for the road with the most congestion.

Task
Given 2 pairs of values each representing a road (the number of cars on it and its name), construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.

After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

Example
t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
t.turngreen()  ==  "3rd st"
t.turngreen()  ==  "27th ave"
t.turngreen()  ==  null

t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
t.turngreen()  ==  null
*/

class SmartTrafficLight {
  constructor([carsA, nameA], [carsB, nameB]) {
    this.cars = [carsA, carsB]; // current queues
    this.names = [nameA, nameB]; // road labels
  }

  turngreen() {
    const [a, b] = this.cars;
    if (a === 0 && b === 0) return null;

    if (a > b) {
      this.cars[0] = 0;
      return this.names[0];
    }
    if (b > a) {
      this.cars[1] = 0;
      return this.names[1];
    }

    this.cars[0] = this.cars[1] = 0;
    return null;
  }
}

t = new SmartTrafficLight([42, "27th ave"], [72, "3rd st"]);

console.log(t.turngreen());
console.log(t.turngreen());
console.log(t.turngreen());

/*
3rd st
27th ave
null
*/
