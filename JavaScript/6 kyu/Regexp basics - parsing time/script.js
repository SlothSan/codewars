/*
Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None.
*/

String.prototype.toSeconds = function () {
  const match = this.match(/^(\d{2,2}):(\d{2}):(\d{2})$/);
  if (!match) return null;

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const seconds = parseInt(match[3], 10);

  if (minutes > 59 || seconds > 59) return null;

  return hours * 3600 + minutes * 60 + seconds;
};

console.log("00:00:00".toSeconds()); //0
console.log("99:59:59".toSeconds()); //359999
