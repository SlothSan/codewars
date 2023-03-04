/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

�
∗
(
�
−
�
)
∗
(
�
−
�
)
∗
(
�
−
�
)
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

�
=
�
+
�
+
�
2
s= 
2
a+b+c
​
 
Output should have 2 digits precision.
*/

const heron = (a, b, c) => {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(heron(3, 4, 5)); //6
