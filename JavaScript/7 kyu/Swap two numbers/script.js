const swap = (ary) => {
  ary[0] = ary[0] + ary[1];
  ary[1] = ary[0] - ary[1];
  ary[0] = ary[0] - ary[1];
};

const arr = [10, 20];
swap(arr);
console.log(arr);
