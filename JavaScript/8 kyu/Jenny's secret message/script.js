/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

const greet = (name) => "Hello, " + (name == "Johnny" ? "my love" : name) + "!";

console.log(greet("Mike")); //Hello, Mike!
console.log(greet("Johnny")); //Hello, my love!
