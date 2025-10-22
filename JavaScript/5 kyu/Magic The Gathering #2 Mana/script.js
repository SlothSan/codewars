/*
Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons. The game itself can be quite complicated to learn. In this series of katas, we'll be solving some of the situations that arise during gameplay. You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.

In Magic, each spell you cast has a cost associated with it. Those costs are represented like so:

"B" -> One black mana
"G" -> One green mana
"R" -> One red mana
"U" -> One blue mana
"W" -> One white mana
"1" -> One colorless mana
"2" -> Two colorless mana
"3BBG" -> Three colorless mana, two black mana, one green mana
Your mana pool will be one string that contains all of your available mana like so:

"10WWWRRRRR" -> Means you have 10 colorless mana, 3 white mana and 5 red mana to work with.
The caveat is, any left over colored mana, can be used as colorless mana. So if you have a spell that costs "1B" and your mana pool has "UB" you can cast that spell, since the "U" can be used as a colorless mana.

With this knowlege, write a function canCast() that takes in a string for your mana pool and then any number of spells' casting costs. Return true if you have enough mana to cast the spell, false otherwise.

Examples:

canCast("BBRR","BR") -> true
canCast("BBRR","BR","BR") -> true
canCast("4R","3R") -> true
canCast("2", "R") -> false
canCast("RR", "2") -> true
*/

const canCast = (pool, ...spells) => {
  const countMana = (str) => {
    const mana = { C: 0, W: 0, U: 0, B: 0, R: 0, G: 0 };
    (str.match(/\d+|[WUBRG]/g) || []).forEach((m) =>
      /\d+/.test(m) ? (mana.C += +m) : mana[m]++
    );
    return mana;
  };

  let poolMana = countMana(pool);

  for (const spell of spells) {
    const cost = countMana(spell);
    const current = { ...poolMana };

    for (const c of ["W", "U", "B", "R", "G"]) {
      if (cost[c] > current[c]) return false;
      current[c] -= cost[c];
    }

    let available =
      current.C + current.W + current.U + current.B + current.R + current.G;
    if (cost.C > available) return false;

    let toPay = cost.C;
    if (current.C >= toPay) current.C -= toPay;
    else {
      toPay -= current.C;
      current.C = 0;
      for (const c of ["W", "U", "B", "R", "G"]) {
        const used = Math.min(toPay, current[c]);
        current[c] -= used;
        toPay -= used;
        if (!toPay) break;
      }
    }

    poolMana = current;
  }

  return true;
};

console.log(canCast("BBRR", "BR", "BR")); //true
