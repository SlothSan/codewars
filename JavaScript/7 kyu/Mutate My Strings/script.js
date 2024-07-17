/*
I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

const mutateMyStrings = (stringOne, stringTwo) => {
  const s1 = stringOne.split("");
  const s2 = stringTwo.split("");
  const mutated = [s1.join("")];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      s1[i] = s2[i];
      mutated.push(s1.join(""));
    }
  }
  return mutated.join("\n") + "\n";
};

console.log(mutateMyStrings("Hello World", "Mello Corld"));
/*
Hello World
Mello World
Mello Corld
*/
