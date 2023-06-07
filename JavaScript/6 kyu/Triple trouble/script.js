/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

const tripledouble = (num1, num2) => {
  const num1String = num1.toString();
  const num2String = num2.toString();

  for (let i = 0; i <= 9; i++) {
    const triplePattern = new RegExp(`${i}{3}`);
    const doublePattern = new RegExp(`${i}{2}`);
    if (triplePattern.test(num1String) && doublePattern.test(num2String)) {
      return 1;
    }
  }
  return 0;
};

console.log(tripledouble(451999277, 41177722899));
