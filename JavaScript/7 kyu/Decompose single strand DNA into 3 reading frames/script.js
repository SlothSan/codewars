const decomposeSingleStrand = (singleStrand) => {
  let frame1 = singleStrand.match(/.{1,3}/g).join(" ");
  let frame2 =
    singleStrand.slice(0, 1) +
    " " +
    singleStrand
      .slice(1)
      .match(/.{1,3}/g)
      .join(" ");
  let frame3 =
    singleStrand.slice(0, 2) +
    " " +
    singleStrand
      .slice(2)
      .match(/.{1,3}/g)
      .join(" ");

  return `Frame 1: ${frame1}\nFrame 2: ${frame2}\nFrame 3: ${frame3}`;
};

console.log(decomposeSingleStrand("AGGTGACACCGCAAGCCTTATATTAGC"));
/*
Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC
Frame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC
Frame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C
*/
