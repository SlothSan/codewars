/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
1
6
+
1
8
2
14
2
6
+
3
9
5
15
1
2
2
+
8
1
1
10
3
+
​
  
1
1
2
​
  
6
8
14
​
 
​
  
+
​
  
2
3
5
​
  
6
9
15
​
 
​
  
+
​
  
1
1
​
  
2
8
10
​
  
2
1
3
​
 
​
 

*/

const add = (num1, num2) => {
  num1 = String(num1).split("").reverse();
  num2 = String(num2).split("").reverse();
  let result = [];
  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    result.push((num1[i] | 0) + (num2[i] | 0));
  }
  return Number(result.reverse().join(""));
};

console.log(add(16, 18)); //214
