/* 
Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.

Please check the criteria for a valid number:

optional + or - symbol in front

optional digits before a decimal point (digits are characters ranging from '0' to '9')

a decimal point

exactly two digits after the point

nothing else

Examples of valid and non-valid numbers

List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]
*/

const validNumber = (num) => {
  const pattern = /^[-+]?[0-9]*\.[0-9]{2}$/;
  return pattern.test(num);
};

console.log(validNumber("34443.33"));
//true
