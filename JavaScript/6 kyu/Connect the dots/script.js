/*

*/

const connectTheDots = (input) => {
  input = input.replace(/\r\n/g, "\n");
  const trailingNL = input.endsWith("\n");

  let lines = input.split("\n");
  if (trailingNL && lines[lines.length - 1] === "") lines.pop();

  const h = lines.length;
  const w = Math.max(0, ...lines.map((l) => l.length));
  const grid = lines.map((l) => l.padEnd(w, " ").split(""));

  const pos = new Map();
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const c = grid[y][x];
      if (c >= "a" && c <= "z") pos.set(c, { x, y });
    }

  const letters = [];
  for (let i = 97; i <= 122; i++) {
    const c = String.fromCharCode(i);
    if (pos.has(c)) letters.push(c);
  }

  const s = (n) => (n > 0) - (n < 0);

  for (let i = 0; i < letters.length - 1; i++) {
    const a = pos.get(letters[i]),
      b = pos.get(letters[i + 1]);
    const dx = b.x - a.x,
      dy = b.y - a.y;
    const sx = s(dx),
      sy = s(dy);
    const n = Math.max(Math.abs(dx), Math.abs(dy));
    for (let k = 0; k <= n; k++) grid[a.y + sy * k][a.x + sx * k] = "*";
  }

  const out = grid.map((r) => r.join("")).join("\n");
  return trailingNL ? out + "\n" : out;
};

const input =
  "           \n" +
  " a       b \n" +
  " e         \n" +
  "           \n" +
  " d       c \n" +
  "           \n";

console.log(connectTheDots(input));

/**
 *********
 *       *
 *       *
 *********
 **/
