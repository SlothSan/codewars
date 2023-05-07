/*
Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/

const redarr = (arr) => Object.assign({}, Array.from(new Set(arr)).sort());
console.log(
  redarr([
    "CNN",
    "ITV",
    "Bloomberg TV",
    "National Geographic",
    "Film 4",
    "Bloomberg TV",
    "BBC2",
    "Film 4",
    "SkyNews",
    "MTV",
    "Bloomberg TV",
    "Drama",
    "Drama",
    "BBC2",
    "National Geographic",
    "4Music",
    "Channel 5",
  ])
);

/*
{
  '0': '4Music',
  '1': 'BBC2',
  '2': 'Bloomberg TV',
  '3': 'CNN',
  '4': 'Channel 5',
  '5': 'Drama',
  '6': 'Film 4',
  '7': 'ITV',
  '8': 'MTV',
  '9': 'National Geographic',
  '10': 'SkyNews'
}
*/
