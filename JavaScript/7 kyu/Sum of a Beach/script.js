/*
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/

const sumOfABeach = (beach) => {
  let count = 0;
  const targets = ["sand", "water", "fish", "sun"];
  beach = beach.toLowerCase();
  targets.forEach((word) => {
    let regexp = new RegExp(word, "g");
    count += (beach.match(regexp) || []).length;
  });
  return count;
};

console.log(
  sumOfABeach(
    "weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn"
  )
); //4
