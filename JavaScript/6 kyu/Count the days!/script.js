/* 
Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"

PS: This is my first kata. I hope you have fun^^
*/

const countDays = (d) => {
  const today = new Date();
  const timeDiff = d.getTime() - today.getTime();
  const daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));

  if (daysDiff < 0) {
    return "The day is in the past!";
  } else if (daysDiff === 0) {
    return "Today is the day!";
  } else {
    return `${daysDiff} days`;
  }
};

console.log(countDays(new Date("June 12, 2033")));
//3511 days
