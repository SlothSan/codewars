/* 
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

//FUCK REGEX TBH.
const REGEXP = /^(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+([a-zA-Z0-9]{6,})$/;

const string = "ghdfj32";

const ACTUAL = REGEXP.test(string);

console.log(ACTUAL); //expect false.
