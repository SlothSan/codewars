/* 
You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:

r = Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,  Los Angeles Clippers 100 Boston Celtics 120.

A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...)  will return as a string

the name of the team followed by : and
the number of matches won by the team
the number of draws
the number of matches lost by the team
the total number of points scored by the team
the total number of points conceded by the team
and finally a kind of marks in our ranking system

a team marks 3 if it is a win
a team marks 1 if it is a draw
a team marks 0 if it is a loss.
The return format is:

"Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"
Remarks:
The team name "" returns "".

If a team name can't be found in the given string of results you will return "Team Name:This team didn't play!" (See examples below).

The scores must be integers. If a score is a float number (abc.xyz...) you will return: "Error(float number):the concerned string"

Examples:
nba_cup(r, "Los Angeles Clippers") -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

nba_cup(r, "Boston Celtics") -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

nba_cup(r, "") -> ""

nba_cup(r, "Boston Celt") -> "Boston Celt:This team didn't play!"

r0="New York Knicks 101.12 Atlanta Hawks 112"
nba_cup(r0, "Atlanta Hawks") -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"
*/

function updateMatchStatistics(pointsA, pointsB, home, stats) {
  if (home) {
    const temp = pointsA;
    pointsA = pointsB;
    pointsB = temp;
  }

  stats[3] += pointsA;
  stats[4] += pointsB;

  if (pointsA > pointsB) {
    stats[0]++;
  } else if (pointsA < pointsB) {
    stats[1]++;
  } else {
    stats[2]++;
  }
}

function nbaCup(resultSheet, toFind) {
  if (!toFind) return "";

  const stats = [0, 0, 0, 0, 0];
  const matches = resultSheet.split(",").filter((s) => s.includes(toFind));

  for (const match of matches) {
    if (match.includes(".")) {
      return "Error(float number):" + match;
    }
    const teams = match
      .substring(0, match.lastIndexOf(" "))
      .replace(/ \d+ /g, "@")
      .split("@");
    if (teams[0] === toFind || teams[1] === toFind) {
      const pointsA = parseInt(match.substring(match.lastIndexOf(" ") + 1));
      const pointsB = parseInt(
        match.substring(teams[0].length + 1, match.indexOf(teams[1]) - 1)
      );
      updateMatchStatistics(pointsA, pointsB, match.startsWith(toFind), stats);
    }
  }

  return (
    toFind +
    (stats[2] + stats[3] > 0
      ? `:W=${stats[0]};D=${stats[2]};L=${stats[1]};Scored=${
          stats[3]
        };Conceded=${stats[4]};Points=${3 * stats[0] + stats[2]}`
      : ":This team didn't play!")
  );
}
const r1 =
  "Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112," +
  "Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94," +
  "Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106," +
  "Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95," +
  "Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94," +
  "Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95," +
  "Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,";

console.log(nbaCup(r1, "Los Angeles Clippers"));
//Los Angeles Clippers:W=2;D=0;L=0;Scored=215;Conceded=192;Points=6
