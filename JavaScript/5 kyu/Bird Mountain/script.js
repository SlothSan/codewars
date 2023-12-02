const starPattern = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const hillCount = (mountains) =>
  mountains.reduce(
    (acc, row) => acc + row.reduce((acc, dot) => acc + Number(dot === "^"), 0),
    0
  );

const peakHeight = (mountains) =>
  Array.from({
    length: mountains.length,
  }).findIndex(() => {
    if (hillCount(mountains) === 0) return true;
    mountains = mountains.map((row, rowIndex) =>
      row.map((_, colIndex) =>
        starPattern.reduce(
          (acc, [x, y]) =>
            acc && (mountains[rowIndex + y] || [])[colIndex + x] == "^",
          true
        )
          ? "^"
          : " "
      )
    );
    return false;
  });

const mountain = [
  "^^^^^^        ".split(""),
  " ^^^^^^^^     ".split(""),
  "  ^^^^^^^     ".split(""),
  "  ^^^^^       ".split(""),
  "  ^^^^^^^^^^^ ".split(""),
  "  ^^^^^^      ".split(""),
  "  ^^^^        ".split(""),
];

console.log(peakHeight(mountain)); //3
