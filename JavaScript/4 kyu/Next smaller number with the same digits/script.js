/*
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
*/

const nextSmaller = (n) => {
  let arr = n.toString().split("").reverse();
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        let tempArr = arr.splice(j, 1);
        let tempArr2 = arr.splice(0, i).sort().reverse();
        tempArr = tempArr.concat(tempArr2);
        output += arr.reverse().concat(tempArr).join("");
        return output.length === output.replace(/^0+/, "").length
          ? output * 1
          : -1;
      }
    }
  }
  return -1;
};

console.log(nextSmaller(12345678900)); //12345678090
