/*
You've purchased a ready-meal from the supermarket.

The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

Oh no, your microwave is 800W! How long should you cook this for?!
*/

const cookingTime = (neededPower, minutes, seconds, power) => {
  let totalSeconds = minutes * 60 + seconds;
  let adjustedTime = Math.ceil(
    totalSeconds * (parseInt(neededPower) / parseInt(power))
  );
  return `${Math.floor(adjustedTime / 60)} minutes ${
    adjustedTime % 60
  } seconds`;
};

console.log(cookingTime("600W", 4, 20, "800W"));
//3 minutes 15 seconds
