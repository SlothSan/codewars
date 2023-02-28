/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

const initializeNames = (name) => {
  return name.split(" ").length > 2
    ? name
        .split(" ")
        .map((currentName, index) => {
          if (index > 0 && index < name.split(" ").length - 1) {
            return (currentName = currentName[0] + ".");
          } else {
            return currentName;
          }
        })
        .join(" ")
    : name;
};

console.log(initializeNames("Lois Mary Lane")); //Lois M. Lane
