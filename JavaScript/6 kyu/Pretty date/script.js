/*
Write a helper function that accepts an argument (Ruby: a Time object / Others: number of seconds) and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

toPretty(0) => "just now"

toPretty(40000) => "11 hours ago"
Specifics
The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
Only times in the past will be given, with the range "just now" to "52 weeks ago"
*/

const toPretty = (seconds) => {
  if (!seconds) return "just now";

  const intervals = [
    { seconds: 604800, label: "week" },
    { seconds: 86400, label: "day" },
    { seconds: 3600, label: "hour" },
    { seconds: 60, label: "minute" },
    { seconds: 1, label: "second" },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      const prefix =
        count === 1 ? (interval.label === "hour" ? "an" : "a") : count;
      const unit = count === 1 ? interval.label : `${interval.label}s`;
      return `${prefix} ${unit} ago`;
    }
  }
};

console.log(toPretty(10000000));
//16 weeks ago
