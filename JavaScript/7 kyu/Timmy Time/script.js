/*
Write a function changeTime which increases or decreases given time. Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/

const changeTime = (input, delta) => {
  const [hours, minutes] = input.split(":").map(Number);
  const newTotalMinutes = (hours * 60 + minutes + delta + 1440) % 1440;
  return `${Math.floor(newTotalMinutes / 60)
    .toString()
    .padStart(2, "0")}:${(newTotalMinutes % 60).toString().padStart(2, "0")}`;
};

console.log(changeTime("08:59", 1)); //09:00
