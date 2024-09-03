const countSel = (arr) => {
  const totalElements = arr.length;
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  const uniqueValues = Object.keys(freqMap).length;
  const valuesOnce = Object.values(freqMap).filter(
    (count) => count === 1
  ).length;
  const maxOccurrence = Math.max(...Object.values(freqMap));
  const mostFrequent = Object.keys(freqMap)
    .filter((key) => freqMap[key] === maxOccurrence)
    .map(Number)
    .sort((a, b) => a - b);

  return [
    totalElements,
    uniqueValues,
    valuesOnce,
    [mostFrequent, maxOccurrence],
  ];
};

console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]));
