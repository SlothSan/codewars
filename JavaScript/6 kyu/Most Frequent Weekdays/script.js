/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']
*/

const mostFrequentDays = (year) => {
  let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    startDay = new Date(year, 0, 1).getDay(),
    isNotLeapDay =
      (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false;
  let result = [];
  if (isNotLeapDay) {
    result.push(days[startDay], days[startDay + 1]);
  } else {
    result.push(days[startDay]);
  }
  if (result[0] === "Sunday" && result[1] === "Monday") {
    result.reverse();
  }
  return result;
};

console.log(mostFrequentDays(2860)); //['Thursday', 'Friday']
