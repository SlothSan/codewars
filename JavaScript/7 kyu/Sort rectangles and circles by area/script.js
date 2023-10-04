const sortByArea = (array) => {
  array = array.slice();
  const circ = (a) => {
    if (Array.isArray(a)) {
      return a.reduce((a, b) => a * b, 1);
    }
    return Math.PI * Math.pow(a, 2);
  };
  return array.sort((a, b) => circ(a) - circ(b));
};

console.log(
  sortByArea([
    [0.73, 1.35],
    [5.49, 7.81],
    [3.37, 0.98],
    [6.17, 3.6],
    5.58,
    4.31,
    [6.94, 5.18],
  ])
);
/*
[
    [ 0.73, 1.35 ],
    [ 3.37, 0.98 ],
    [ 6.17, 3.6 ],
    [ 6.94, 5.18 ],
    [ 5.49, 7.81 ],
    4.31,
    5.58
]
*/
