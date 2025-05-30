/* 
You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

For example:

var c = new Counter();
c.incr(); // counter is now at 1
c + 1; // 2
c > 1; // false
c > 0; // true
c == 1; // true
Math.sqrt(c); // 1
You are not required to support equality comparison between two Counter instances.
*/

class Counter {
  constructor() {
    this.value = 0;
  }

  incr() {
    this.value += 1;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return String(this.value);
  }
}
class Counter {
  constructor() {
    this.value = 0;
  }

  incr() {
    this.value += 1;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return String(this.value);
  }
}
