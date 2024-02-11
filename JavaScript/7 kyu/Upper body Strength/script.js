/*
Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.
*/

const alexMistakes = (numberOfKata, timeLimit) => {
  let kataTime = 6; //10 in an hour thus 6 mins each
  let pushupTime = 5; // starts at 5 and doubles for every mistake.
  let timeForMistakes = timeLimit - numberOfKata * kataTime;
  let mistakeCount = 0;
  while (timeForMistakes >= pushupTime) {
    mistakeCount++;
    timeForMistakes -= pushupTime;
    pushupTime *= 2;
  }
  return mistakeCount;
};

console.log(alexMistakes(10, 120)); //3
