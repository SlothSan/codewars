/* 
Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

Note: initials should be separated with a space.
*/

const toInitials = (name) =>
  name
    .split(" ")
    .map((curr) => {
      return curr[0] + ".";
    })
    .join(" ");

console.log(toInitials("Mike Oram"));
//M. O.