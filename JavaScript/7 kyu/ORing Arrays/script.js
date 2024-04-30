/*
It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

For example:

orArrays([1,2,3],[1,2,3]) === [1,2,3]
orArrays([1,2,3],[4,5,6]) === [5,7,7]
orArrays([1,2,3],[1,2]) === [1,2,3]
orArrays([1,2],[1,2,3]) === [1,2,3]
orArrays([1,2,3],[1,2,3],3) === [1,2,3]
*/

const orArrays = (arr1, arr2, defaultValue = 0) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const val1 = arr1[i] !== undefined ? arr1[i] : defaultValue;
    const val2 = arr2[i] !== undefined ? arr2[i] : defaultValue;
    result.push(val1 | val2);
  }

  return result;
};

console.log(orArrays([1, 2, 3], [4, 5, 6]));
//[ 5, 7, 7 ]
