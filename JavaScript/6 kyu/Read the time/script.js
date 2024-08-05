/* 
Given time in 24-hour format, convert it to words.

For example:
13:00 = one o'clock 
13:09 = nine minutes past one 
13:15 = quarter past one 
13:29 = twenty nine minutes past one
13:30 = half past one 
13:31 = twenty nine minutes to two
13:45 = quarter to two 
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
More examples in test cases. Good luck!
*/

const solve = (time) => {
  const hoursWords = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "midnight",
  ];

  const minutesWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  let [hours, minutes] = time.split(":").map(Number);

  if (minutes === 0) {
    if (hours === 0) return "midnight";
    return hoursWords[hours] + " o'clock";
  }

  if (minutes <= 30) {
    if (minutes === 15) return `quarter past ${hoursWords[hours]}`;
    if (minutes === 30) return `half past ${hoursWords[hours]}`;
    if (hours === 0)
      return `${minutesWords[minutes]} ${
        minutes === 1 ? "minute" : "minutes"
      } past midnight`;
    return `${minutesWords[minutes]} ${
      minutes === 1 ? "minute" : "minutes"
    } past ${hoursWords[hours]}`;
  } else {
    minutes = 60 - minutes;
    hours = (hours + 1) % 24;
    if (minutes === 15) return `quarter to ${hoursWords[hours]}`;
    if (hours === 0)
      return `${minutesWords[minutes]} ${
        minutes === 1 ? "minute" : "minutes"
      } to midnight`;
    return `${minutesWords[minutes]} ${
      minutes === 1 ? "minute" : "minutes"
    } to ${hoursWords[hours]}`;
  }
};

console.log(solve("00:01")); //one minute past midnight
