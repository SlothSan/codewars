/*
In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}
Notes:

    The dictionary given will only contain strings
    The dictionary given will not be empty
    You do not have to sort the items in the lists

*/

function switchDict(dic) {
  let swapped = {};
  for (let key in dic) {
    let value = dic[key];
    if (swapped[value] === undefined) {
      swapped[value] = [key];
    } else {
      swapped[value].push(key);
    }
  }
  return swapped;
}

console.log(
  switchDict({
    Ice: "Cream",
    Age: "21",
    Light: "Cream",
    Double: "Cream",
  })
);

//{ '21': [ 'Age' ], Cream: [ 'Ice', 'Light', 'Double' ] }
