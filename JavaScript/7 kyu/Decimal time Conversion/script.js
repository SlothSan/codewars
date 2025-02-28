/* 
Write two functions, one that converts standard time to decimal time and one that converts decimal time to standard time.

One hour has 100 minutes (or 10,000 seconds) in decimal time, yet its duration is the same as in standard time. Thus a decimal minute consists of 36 standard seconds, which is 1/100 of an hour.
Working time is usually rounded to integer decimal minutes. Thus one standard minute equals 0.02 decimal hours, while two standard minutes equal 0.03 decimal hours and so on.
The terms "normal" and "standard" time are considered synonymous in this kata, just like the terms "decimal" and "industrial" time.
toIndustrial(time) should accept either the time in minutes as an integer or a string of the format "h:mm". Minutes will always consist of two digits in the tests (e.g., "0:05"); hours can have more. Return a double that represents decimal hours (e.g. 1.75 for 1h 45m). Round to a precision of two decimal digits - do not simply truncate!
toNormal(time) should accept a double representing decimal time in hours. Return a string that represents standard time in the format "h:mm".
There will be no seconds in the tests. We'll neglect them for the purpose of this kata.

Flavor text (click to expand)

Examples:
toIndustrial(1) => 0.02
toIndustrial("1:45") => 1.75
toNormal(0.33) => "0:20"
Please leave a rating if you liked this kata!
*/

const toIndustrial = (time) => {
  const totalMinutes =
    typeof time === "string"
      ? parseInt(time.split(":")[0], 10) * 60 + parseInt(time.split(":")[1], 10)
      : time;
  const standardHours = totalMinutes / 60;
  const wholeHours = Math.floor(standardHours);
  const decimalMinutes = Math.round((standardHours - wholeHours) * 100);
  return wholeHours + decimalMinutes / 100;
};

const toNormal = (decimalHours) => {
  const totalMinutes = Math.round(decimalHours * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

console.log(toIndustrial(105)); //1.75
console.log(toNormal(1.75)); //1:45
