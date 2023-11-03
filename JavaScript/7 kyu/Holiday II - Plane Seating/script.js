/*
Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.
*/

const planeSeat = (a) => {
  const seatPattern = /^(\d+)([A-K])$/;
  const match = a.match(seatPattern);

  if (!match) {
    return "No Seat!!";
  }

  const number = parseInt(match[1], 10);
  const letter = match[2];
  if (letter === "I" || letter === "J" || number > 60 || number < 1)
    return `No Seat!!`;
  let section = "";

  if (number >= 1 && number <= 20) {
    section = "Front";
  } else if (number >= 21 && number <= 40) {
    section = "Middle";
  } else {
    section = "Back";
  }

  let location = "";
  if (letter >= "A" && letter <= "C") {
    location = "Left";
  } else if (letter >= "D" && letter <= "F") {
    location = "Middle";
  } else {
    location = "Right";
  }

  return `${section}-${location}`;
};

console.log(planeSeat("20G")); //Front-Right
