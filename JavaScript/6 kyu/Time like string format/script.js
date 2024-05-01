/* 
Build up a method that takes an integer and formats it to a 'time - like' format.

The method must raise an exception if its hour length is less than 3 digits and greater than 4.

Example:
solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception
*/

const solution = (hour) => {
  let input = hour.toString();

  if ((input.length === 3) | (input.length === 4)) {
    return input
      .split(/^(\d{1,2})(\d\d$)/)
      .filter(Boolean)
      .join(":");
  } else throw input;
};

console.log(solution(1000));
//10:00
