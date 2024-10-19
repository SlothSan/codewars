/*
Task

A list S will be given. You need to generate a list T from it by following the given process:

    Remove the first and last element from the list S and add them to the list T.
    Reverse the list S
    Repeat the process until list S gets emptied.

The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.
Example

S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T

Note

    size of S goes up to 10^6
    Keep the efficiency of your code in mind.
    Do not mutate the Input.
*/

const arrange = (S) =>  {
    const T = [];
    let left = 0;
    let right = S.length - 1;

    let reverse = false;

    while (left <= right) {
        if (!reverse) {
            T.push(S[left++]);
            if (left <= right) {
                T.push(S[right--]);
            }
        } else {
            T.push(S[right--]);
            if (left <= right) {
                T.push(S[left++]);
            }
        }
        reverse = !reverse;
    }

    return T;
}

console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]))
/*
[
  9,  1, 5, 7, -2,
  6, -3, 8, 5
]
*/