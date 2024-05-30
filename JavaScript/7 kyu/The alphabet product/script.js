/* 
I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
*/

const alphabet = (ns) => {
  ns.sort((a, b) => a - b);
  return ns[7] / (ns[0] * ns[1] === ns[2] ? ns[3] : ns[2]);
};

console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4]));
