/*
Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.

This Kata has been inspired by the Regular Expressions chapter from the book Eloquent JavaScript.
*/

const dateChecker = (date) => {
  const regex = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;
  return regex.test(date);
};

console.log(dateChecker("14-10-1066 12:00")); //true
