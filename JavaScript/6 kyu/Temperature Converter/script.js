/*
Write a function convert_temp(temp, from_scale, to_scale) converting temperature from one scale to another. Return converted temp value.

Round converted temp value to an integer(!).

Reading: http://en.wikipedia.org/wiki/Conversion_of_units_of_temperature

possible scale inputs:
    "C"  for Celsius
    "F"  for Fahrenheit
    "K"  for Kelvin
    "R"  for Rankine
    "De" for Delisle
    "N"  for Newton
    "Re" for Réaumur
    "Ro" for Rømer
temp is a number, from_scale and to_scale are strings.

convert_temp(   100, "C",  "F") # => 212
convert_temp(    40, "Re", "C") # => 50
convert_temp(    60, "De", "F") # => 140
convert_temp(373.15, "K",  "N") # => 33
convert_temp(   666, "K",  "K") # => 666
*/

const convertTemp = (temp, from, to) => {
  const toC = {
    C: (t) => t,
    F: (t) => ((t - 32) * 5) / 9,
    K: (t) => t - 273.15,
    R: (t) => ((t - 491.67) * 5) / 9,
    De: (t) => 100 - (t * 2) / 3,
    N: (t) => (t * 100) / 33,
    Re: (t) => (t * 5) / 4,
    Ro: (t) => ((t - 7.5) * 40) / 21,
  };

  const fromC = {
    C: (t) => t,
    F: (t) => (t * 9) / 5 + 32,
    K: (t) => t + 273.15,
    R: (t) => ((t + 273.15) * 9) / 5,
    De: (t) => ((100 - t) * 3) / 2,
    N: (t) => (t * 33) / 100,
    Re: (t) => (t * 4) / 5,
    Ro: (t) => (t * 21) / 40 + 7.5,
  };

  return Math.round(fromC[to](toC[from](temp)));
};

console.log(convertTemp(-30, "De", "K")); //393
