const binaryCleaner = (arr) => {
  let binary = [];
  let indexes = [];

  arr.map((ele, index) => {
    if (ele <= 1) {
      binary.push(ele);
    } else {
      indexes.push(index);
    }
  });

  return [binary, indexes];
};


console.log()