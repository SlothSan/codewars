/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

const ipsBetween = (start, end) => ipToInt32(end) - ipToInt32(start);

const ipToInt32 = (ip) => {
  return parseInt(
    ip
      .split(".")
      .map(function (v) {
        let bin = parseInt(v).toString(2);
        return new Array(9 - bin.length).join("0") + bin;
      })
      .join(""),
    2
  );
};

console.log(ipsBetween("1.2.3.4", "5.6.7.8")); //67372036
