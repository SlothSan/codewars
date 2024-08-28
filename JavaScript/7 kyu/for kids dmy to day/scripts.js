/*
#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!
*/

const dayOfTheWeek = (date) => {
  const [day, month, year] = date.split("/").map(Number);
  const dateObj = new Date(year, month - 1, day);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysOfWeek[dateObj.getDay()];
};

console.log(dayOfTheWeek("06/06/1944"));
//Tuesday
