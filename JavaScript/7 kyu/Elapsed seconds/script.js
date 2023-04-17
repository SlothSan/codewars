/*
Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

const elapsedSeconds = (startDate, endDate) =>
  endDate.getTime() / 1000 - startDate.getTime() / 1000;

const start = new Date(2013, 1, 1, 0, 0, 1);
const end = new Date(2013, 1, 1, 0, 0, 2);
console.log(elapsedSeconds(start, end)); //1
