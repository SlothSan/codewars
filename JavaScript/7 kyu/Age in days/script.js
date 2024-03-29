/*
Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!
*/

const ageInDays = (year, month, day) => {
  let currentDate = new Date();

  let birthDay = new Date(year, month - 1, day);

  let difference = currentDate - birthDay;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return `You are ${days} days old`;
};

console.log(ageInDays(2000, 12, 25));
//You are 8464 days old
