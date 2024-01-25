/*
Can a value be both true and false?

Define omniBool so that it returns true for the following:

omniBool == true && omniBool == false
If you enjoyed this kata, be sure to check out my other katas.
*/

let valueOfCalled = false;
const omnibool = {
  valueOf() {
    if (!valueOfCalled) {
      valueOfCalled = true;
      return true;
    }
    return false;
  },
};

console.log(omnibool == true); //true
console.log(omnibool == false); //true

//This is terrible and you probably would never want to do this outside of being a cool way of proving how dumb JS is.
