/*
Note: Based off Minecraft, hopefully you at least know the game!

Story: You want to create a giant mine shaft, but you're a little stingy with your iron and diamonds and would not mine out all of the stone with iron or diamond pickaxes. Instead, you rely on less durable but cheaper stone pickaxes! You will need a lot of stone pickaxes though as they break faster than diamond or iron ones, so you need to find out how many stone pickaxes you can craft before you run out of sticks and cobblestones. Unfortunately, you're not an organized person, and you leave all of your materials in a single chest with random junk that you need to filter.

Task: Given an array, return the maximum amount of stone pickaxes you can craft before you run out of sticks and cobblestones. Within the array would be a series of strings with the exact names of the materials listed below. A single stone pickaxe is made of 3 "Cobblestone" and 2 "Sticks", check if your given array contains enough "Sticks" and "Cobblestone" to craft a single stone pickaxe or even more. Do not count any materials apart from "Cobblestones", "Sticks" and "Wood". Wood can be converted into 4 sticks!

Here are the materials you would expect in an array:

Sticks
Cobblestone
Stone (These are different from cobblestone and cannot be used to make a stone pickaxe.)
Wool
Dirt
Wood (Can be treated as sticks, typically 4 sticks for 1 wood)
Diamond

Array sizes are randomized and range from 1 - 200 with randomized contents.

Examples:

Array: ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]
Returned: 1

Array: []
Returned: 0

Array: ["Sticks", "Wool", "Cobblestone"]
Returned: 0

Array: ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]
Returned: 2

Good Luck :D

Made by miggycoder, this is my first kata I ever created.

*/

const stonePick = (arr) => {
  let stickCount = arr.reduce(
    (acc, curr) => acc + (curr === "Wood" ? 4 : curr === "Sticks" ? 1 : 0),
    0
  );
  let stoneCount = arr.filter((item) => item === "Cobblestone").length;
  let pickCount = Math.min(
    Math.floor(stickCount / 2),
    Math.floor(stoneCount / 3)
  );
  return pickCount;
};

console.log(
  stonePick([
    "Sticks",
    "Wool",
    "Dirt",
    "Diamond",
    "Stone",
    "Cobblestone",
    "Sticks",
    "Cobblestone",
    "Cobblestone",
  ])
); // 1
