/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

const kebabize = (string) => {
  return string
    .replace(/[0-9]/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};

console.log(kebabize("myCamelCasedString"));
