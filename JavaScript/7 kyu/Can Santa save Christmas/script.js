/*
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/

const determineTime = (durations) => {
  let totalSeconds = 0;
  for (let i = 0; i < durations.length; i++) {
    let current = durations[i].split(":");
    totalSeconds += +current[0] * 60 * 60 + +current[1] * 60 + +current[2];
  }
  return totalSeconds <= 86400;
};

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"])); //true
