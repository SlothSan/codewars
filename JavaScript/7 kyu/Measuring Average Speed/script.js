/*
Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".
*/

const calculateSpeed = (distance, time) => {
  const parse = (str, re) => {
    const [, numeric, unit] = str.match(re) || [];
    return { numeric: +numeric, unit };
  };

  const METERS_PER_KILOMETRE = 1_000;
  const SECONDS_PER_MINUTE = 60;
  const METRES_PER_SECOND_TO_MILES_PER_HOUR = 2.23694;

  const { numeric: distanceValue, unit: distanceUnit } = parse(
    distance.trim(),
    /^([\d.]+)\s*(km|m)$/i
  );

  const metresTravelled =
    distanceUnit.toLowerCase() === "km"
      ? distanceValue * METERS_PER_KILOMETRE
      : distanceValue;

  const { numeric: timeValue, unit: timeUnit } = parse(
    time.trim(),
    /^([\d.]+)\s*(min|s)$/i
  );

  const secondsElapsed =
    timeUnit.toLowerCase() === "min"
      ? timeValue * SECONDS_PER_MINUTE
      : timeValue;

  const milesPerHour = Math.round(
    (metresTravelled / secondsElapsed) * METRES_PER_SECOND_TO_MILES_PER_HOUR
  );

  return `${milesPerHour}mph`;
};

console.log(calculateSpeed("573km", "39min")); //548mph
