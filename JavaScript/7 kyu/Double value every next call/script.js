/*
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/

class Class {
  static #previousValue = 0;

  static getNumber() {
    if (!this.#previousValue) {
      this.#previousValue = 1;
      return 1;
    } else {
      return (this.#previousValue *= 2);
    }
  }
}

console.log(Class.getNumber()); //1
console.log(Class.getNumber()); //2
