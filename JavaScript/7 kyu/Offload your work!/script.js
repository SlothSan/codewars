/*
You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
If we don't have to contribute any time to the project then return "Easy Money!"
*/

const workNeeded = (projectMinutes, freelancers) =>
  (projectMinutes = freelancers.reduce(
    (acc, [hours, mins]) => acc - hours * 60 - mins,
    projectMinutes
  )) <= 0
    ? `Easy Money!`
    : `I need to work ${(projectMinutes / 60) | 0} hour(s) and ${
        projectMinutes % 60
      } minute(s)`;

console.log(
  workNeeded(221, [
    [1, 55],
    [0, 25],
  ])
);
//I need to work 1 hour(s) and 21 minute(s)
