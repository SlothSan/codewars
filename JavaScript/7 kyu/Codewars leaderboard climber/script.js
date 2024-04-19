/*
We all want to climb the leaderboard. Even given some of the massive scores on there, it's nice to know how close you are...

In this kata you will be given a username and their score, your score (not your real score) and you need to calculate how many kata you need to complete to beat their score, by 1 point exactly.

As this is the easy version (harder one to folow at some point in the future), let's assume only Beta kata and 8kyu kata are available. Worth 3 and 1 point respectively.

Return a string in this format: "To beat <user>'s score, I must complete <x> Beta kata and <y> 8kyu kata."

If the total number of kata you need to complete >1000, add "Dammit!" to the end of the string, like so: "To beat <user>'s score, I must complete <x> Beta kata and <y> 8kyu kata. Dammit!"

If your score is higher than the user's already, return "Winning!" and if they are equal, return "Only need one!"

Note: You are looking to complete as few kata as possible to get to your target.
*/

const leaderB = (user, user_score, your_score) => {
  let betaWorth = 3;
  let eightKyuWorth = 1;
  let betaCount = 0;
  let eightKyuCount = 0;
  let difference = user_score - your_score;

  if (difference < 0) {
    return `Winning!`;
  }

  if (difference === 0) {
    return `Only need one!`;
  }

  while (difference >= 3) {
    difference -= betaWorth;
    betaCount++;
  }

  while (difference > 0) {
    difference -= eightKyuWorth;
    eightKyuCount++;
  }

  let totalCount = eightKyuCount + betaCount;

  let result = `To beat ${user}'s score, I must complete ${betaCount} Beta kata and ${eightKyuCount} 8kyu kata.`;

  return totalCount >= 1000 ? result + " Dammit!" : result;
};

console.log(leaderB("g964", 36097, 20000));
//To beat g964's score, I must complete 5365 Beta kata and 2 8kyu kata. Dammit!
