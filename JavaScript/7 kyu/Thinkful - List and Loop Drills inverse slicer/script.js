const inverseSlice = (items, a, b) => {
  return items.filter((item, index) => {
    if (index < a || index >= b) return item;
  });
};

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
//[ 12, 14, 55, 24 ]