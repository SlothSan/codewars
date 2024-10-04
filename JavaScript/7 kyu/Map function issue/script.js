/* 
The code also has to perform input validation, return :

'given argument is not a function' if func is not a function
'array should contain only numbers' if any elements are not numbers
*/

const func = (item) => {
  return item % 2 === 0;
};

const map = (arr, somefunction) => {
  if (typeof somefunction !== "function")
    return "given argument is not a function";
  if (arr.filter((curr) => curr * 1 == curr).length !== arr.length)
    return "array should contain only numbers";
  return arr.map((item) => somefunction(item));
};

console.log(map([1, 2, 3, 4], func));
//[ false, true, false, true ]
