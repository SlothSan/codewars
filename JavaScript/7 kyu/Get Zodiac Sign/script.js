/*
Your task is to get Zodiac Sign using input day and month.

For example:

getZodiacSign(1,5) => 'Taurus'
getZodiacSign(10,10) => 'Libra'
Correct answers are (preloaded):

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
P.S. Each argument is correct integer number.

WESTERN ASTROLOGY STAR SIGN DATES

Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20)
*/

const signs = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

const getZodiacSign = (day, month) => {
  const cutoff = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const index = (month - 1 + (day >= cutoff[month - 1] ? 1 : 0)) % 12;
  return signs[index];
};

console.log(getZodiacSign(12, 6)); //Gemini
