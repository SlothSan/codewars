/*
Your company, Congo Pizza, is the second-largest online frozen pizza retailer. You own a number of international warehouses that you use to store your frozen pizzas, and you need to figure out how many crates of pizzas you can store at each location.

Congo recently standardized its storage containers: all pizzas fit inside a cubic crate, 16-inches on a side. The crates are super tough so you can stack them as high as you want.

Write a function box_capacity() that figures out how many crates you can store in a given warehouse. The function should take three arguments: the length, width, and height of your warehouse (in feet) and should return an integer representing the number of boxes you can store in that space.

For example: a warehouse 32 feet long, 64 feet wide, and 16 feet high can hold 13,824 boxes because you can fit 24 boxes across, 48 boxes deep, and 12 boxes high, so box_capacity(32, 64, 16) should return 13824.
*/

const boxCapacity = (length, width, height) => {
  const crateSize = 16;
  //Convert below from feet to inches 12 inches in a foot.
  const lengthInches = length * 12;
  const widthInches = width * 12;
  const heightInches = height * 12;

  const cratesAcross = Math.floor(lengthInches / crateSize);
  const cratesDeep = Math.floor(widthInches / crateSize);
  const cratesHigh = Math.floor(heightInches / crateSize);

  const totalCrates = cratesAcross * cratesDeep * cratesHigh;
  return totalCrates;
};

console.log(boxCapacity(32, 64, 16)); //13824
