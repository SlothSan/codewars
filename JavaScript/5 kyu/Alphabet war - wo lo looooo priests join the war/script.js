/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.


Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)
The other letters don't have power and are only victims.
The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.

mtq => wtp
wjs => mjz
A letter with adjacent letters j and t is not converted i.e.:

tmj => tmj
jzt => jzt
The priests (j and t) do not convert the other priests ( jt => jt ).

Example
alphabetWar("z")         //=>  "z"  => "Right side wins!"
alphabetWar("tz")        //=>  "ts" => "Left side wins!" 
alphabetWar("jz")        //=>  "jz" => "Right side wins!" 
alphabetWar("zt")        //=>  "st" => "Left side wins!" 
alphabetWar("azt")       //=> "ast" => "Left side wins!"
alphabetWar("tzj")       //=> "tzj" => "Right side wins!" 
*/

const alphabetWar = (fight) => {
  const power = "wpbs_zdqm";
  fight = fight.replace(
    /(?<!t)[wpbs](?=j)|(?<=j)[wpbs](?!t)|(?<!j)[zdqm](?=t)|(?<=t)[zdqm](?!j)/g,
    (x) => power[8 - power.indexOf(x)]
  );
  const result = fight
    .split("")
    .reduce(
      (a, b) => a + (power.indexOf(b) === -1 ? 0 : power.indexOf(b) - 4),
      0
    );
  return result === 0
    ? "Let's fight again!"
    : `${result < 0 ? "Left" : "Right"} side wins!`;
};

console.log(alphabetWar("wololooooo"));
//Left side wins!