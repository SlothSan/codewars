/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

const strCount = (obj) => {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      count++;
    } else if (typeof obj[key] === "object") {
      count += strCount(obj[key]);
    }
  }
  return count;
};

const obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {},
};
console.log(strCount(obj)); //3
