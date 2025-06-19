/*
On 08/26/2016 (26.08.2016) the German Fussball-Bundesliga (national soccer league) started another new season!

In this kata you get an array with 9 strings, which contain the matches from the first match day.
Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:

x:y [Team 1] - [Team 2]

Example:
6:0 FC Bayern München - Werder Bremen
-:- Eintracht Frankfurt - Schalke 04
The team, which has shot more goals than the other team, wins the match.

Your method should create and return the league table as one string.

Every line in the table follows these rules:

 1. Tableplace with two chars and a dot (" 1.", "12.")
 2. Space
 3. Name of the team/club padded right up to 30 chars (filled up with spaces).
 4. Number of played matches (in this kata always only one digit)
 5. Two spaces
 6. Number of won matches (in this kata always only one digit)
 7. Two spaces
 8. Number of tie matches (in this kata always only one digit)
 9. Two spaces
10. Number of lost matches (in this kata always only one digit)
11. Two spaces
12. Differences of goals (shot vs. gotten)
13. Two spaces
14. Count of points
It is 3 points for a won match and 1 point for a tie.
The table has to be sorted by these criteria:

1. Points
2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!
Example with the two matches above, if the league WOULD only have 4 teams:

 1. FC Bayern München             1  1  0  0  6:0  3 
 2. Eintrach Frankfurt            0  0  0  0  0:0  0
 2. Schalke 04                    0  0  0  0  0:0  0
 4. Werder Bremen                 1  0  0  1  0:6  0
You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

const table = (matches) => {
  const clubs = Object.create(null);

  const ensureClub = (name) => {
    if (!clubs[name]) {
      clubs[name] = { name, played: 0, won: 0, tie: 0, lost: 0, gf: 0, ga: 0 };
    }
    return clubs[name];
  };

  const REG = /^(\d+|-):(\d+|-) (.+?) - (.+)$/;

  for (const line of matches) {
    const m = REG.exec(line);
    if (!m) throw new Error(`Bad input: ${line}`);

    const [, s1, s2, n1, n2] = m;
    const c1 = ensureClub(n1.trim());
    const c2 = ensureClub(n2.trim());

    if (s1 === "-" || s2 === "-") continue;

    const g1 = +s1,
      g2 = +s2;

    c1.played++;
    c2.played++;
    c1.gf += g1;
    c1.ga += g2;
    c2.gf += g2;
    c2.ga += g1;

    if (g1 > g2) {
      c1.won++;
      c2.lost++;
    } else if (g1 < g2) {
      c2.won++;
      c1.lost++;
    } else {
      c1.tie++;
      c2.tie++;
    }
  }

  const tableArray = Object.values(clubs).map((c) => ({
    ...c,
    diff: c.gf - c.ga,
    points: c.won * 3 + c.tie,
  }));

  tableArray.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.diff !== a.diff) return b.diff - a.diff;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  const lines = [];
  let rank = 0;

  tableArray.forEach((c, i, arr) => {
    if (i === 0) rank = 1;
    else {
      const p = arr[i - 1];
      if (!(c.points === p.points && c.diff === p.diff && c.gf === p.gf))
        rank = i + 1;
    }

    const place = String(rank).padStart(2, " ") + ".";
    const club = c.name.padEnd(30, " ");
    const gfGa = `${c.gf}:${c.ga}`;

    lines.push(
      `${place} ${club}${c.played}  ${c.won}  ${c.tie}  ${c.lost}  ${gfGa}  ${c.points}`
    );
  });

  return lines.join("\n");
};

const results = [
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "1:0 Eintracht Frankfurt - Schalke 04",
  "0:2 FC Augsburg - VfL Wolfsburg",
  "1:1 Hamburger SV - FC Ingolstadt",
  "2:0 1. FC Koeln - SV Darmstadt",
  "2:1 Borussia Dortmund - FSV Mainz 05",
  "2:1 Borussia Moenchengladbach - Bayer Leverkusen",
  "2:1 Hertha BSC Berlin - SC Freiburg",
  "2:2 TSG 1899 Hoffenheim - RasenBall Leipzig",
];

console.log(table(results));

/*
 1. FC Bayern Muenchen            1  1  0  0  6:0  3
 2. 1. FC Koeln                   1  1  0  0  2:0  3
 2. VfL Wolfsburg                 1  1  0  0  2:0  3
 4. Borussia Dortmund             1  1  0  0  2:1  3
 4. Borussia Moenchengladbach     1  1  0  0  2:1  3
 4. Hertha BSC Berlin             1  1  0  0  2:1  3
 7. Eintracht Frankfurt           1  1  0  0  1:0  3
 8. RasenBall Leipzig             1  0  1  0  2:2  1
 8. TSG 1899 Hoffenheim           1  0  1  0  2:2  1
10. FC Ingolstadt                 1  0  1  0  1:1  1
10. Hamburger SV                  1  0  1  0  1:1  1
12. Bayer Leverkusen              1  0  0  1  1:2  0
12. FSV Mainz 05                  1  0  0  1  1:2  0
12. SC Freiburg                   1  0  0  1  1:2  0
15. Schalke 04                    1  0  0  1  0:1  0
16. FC Augsburg                   1  0  0  1  0:2  0
16. SV Darmstadt                  1  0  0  1  0:2  0
18. Werder Bremen                 1  0  0  1  0:6  0
*/
