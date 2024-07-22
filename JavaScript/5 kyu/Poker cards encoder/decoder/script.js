function encode(cards) {
  const faceValueToIndex = {
    A: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    T: 9,
    J: 10,
    Q: 11,
    K: 12,
  };
  const suitToIndex = {
    c: 0,
    d: 1,
    h: 2,
    s: 3,
  };

  const codes = cards.map((card) => {
    const faceValue = card.slice(0, -1);
    const suit = card.slice(-1);
    return faceValueToIndex[faceValue] + suitToIndex[suit] * 13;
  });

  return codes.sort((a, b) => a - b);
}

function decode(codes) {
  const indexToFaceValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  const indexToSuit = ["c", "d", "h", "s"];

  const cards = codes
    .sort((a, b) => a - b)
    .map((code) => {
      const faceValueIndex = code % 13;
      const suitIndex = (code / 13) | 0; // integer division
      return indexToFaceValue[faceValueIndex] + indexToSuit[suitIndex];
    });

  return cards;
}
