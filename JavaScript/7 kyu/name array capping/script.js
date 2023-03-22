/*
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/
const capMe = (names) => {
  return names.map((name) => {
    return (
      name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase()
    );
  });
};

console.log(capMe(["RALPH", "GEORGIA", "CHRISTINA"])); //[ 'Ralph', 'Georgia', 'Christina' ]
