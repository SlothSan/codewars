/*
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

const Adam = (nextPart = "") => (nextPart ? `Adam${nextPart}` : " Adam.");
const has = (nextPart) => ` has${nextPart}`;
const a = (nextPart) => ` a${nextPart}`;
const dog = (nextPart = "") => (nextPart ? ` dog${nextPart}` : " dog.");
const The = (nextPart) => `The${nextPart}`;
const name = (nextPart) => ` name${nextPart}`;
const of = (nextPart) => ` of${nextPart}`;
const the = (nextPart) => ` the${nextPart}`;
const is = (nextPart) => ` is${nextPart}`;
const also = (nextPart) => ` also${nextPart}`;
