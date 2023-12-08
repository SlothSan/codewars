/*
Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the expert's choices to generate a correctness score.
Scoring Rules

    When they agree, he gets 1 point.
    When they disagree but one has said '?', he gets 0.5 points.
    When they disagree completely, he gets 0 points.


*/

const correctness = (bobsDecisions, expertDecisions) => {
  let points = 0;
  for (let i = 0; i < bobsDecisions.length; i++) {
    let bob = bobsDecisions[i];
    let expert = expertDecisions[i];
    if (bob === expert) {
      points += 1;
    } else if (bob === "?" || expert === "?") {
      points += 0.5;
    }
  }
  return points;
};

console.log(correctness(["M", "?", "M"], ["M", "F", "?"]));
//2
