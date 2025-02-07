/* 
Story
The construction of the new Death Star is almost complete. It only needs a certain amount of 3 materials – iron, steel, and chromium. The emperor wants the construction finished within a week because he senses an impending rebel attack and knows the battle station will be destroyed if it is not completed within this timeframe. He has already ordered enough material delivered to the station within a week. The problem is, the rebels are attacking the supply routes and there are different amounts of material arriving at the station each week. Will the station be ready in time or will it be destroyed?

Task
The required resources are:

100 Gt of iron
75 Gt of steel
50 Gt of chromium
The input will consist of an array with 8 elements:

The first 7 elements are the shipments - 3-elements-long arrays where each number corresponds to the amount of material that was ordered (iron, steel, and chromium)
The last element is a number representing the day of the rebel attack (0-indexed) - any materials which should have been delivered that day will be lost, and later shipments will be cancelled due to the trading route becoming unsafe
The output will be one of the two possible string:

In case enough resources were delivered before the attack, return "The station is completed!"
Otherwise, return "The station is destroyed! It needed X iron, Y steel and Z chromium for completion.", where X, Y and Z are the quantities of the respective material
*/

const deathStar = (week) => {
  let [remainingIron, remainingSteel, remainingChromium] = [100, 75, 50];
  const shipmentCount = week[week.length - 1];
  const shipments = week.slice(0, shipmentCount);

  shipments.forEach(([iron, steel, chromium]) => {
    remainingIron -= iron;
    remainingSteel -= steel;
    remainingChromium -= chromium;
  });

  if (remainingIron <= 0 && remainingSteel <= 0 && remainingChromium <= 0) {
    return "The station is completed!";
  } else {
    return `The station is destroyed! It needed ${Math.max(
      0,
      remainingIron
    )} iron, ${Math.max(0, remainingSteel)} steel and ${Math.max(
      0,
      remainingChromium
    )} chromium for completion.`;
  }
};

console.log(
  deathStar([
    [100, 75, 49],
    [20, 15, 20],
    [10, 15, 10],
    [50, 50, 20],
    [20, 15, 10],
    [20, 15, 10],
    [20, 15, 10],
    1,
  ])
);
//The station is destroyed! It needed 0 iron, 0 steel and 1 chromium for completion.
