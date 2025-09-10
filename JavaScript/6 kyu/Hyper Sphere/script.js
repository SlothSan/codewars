/*
You will be given an array of cordinates and a radius. The function should return if the coordinates describe a point within the given radius of the origin.

In two dimensions the condition that any [x, y] coordinate lies in a given radius (= a circle) is:

x
2
+
y
2
≤
r
2
x 
2
 +y 
2
 ≤r 
2
 

This generalises to higher dimensions as follows:

x
2
+
y
2
+
z
2
+
.
.
.
≤
r
2
x 
2
 +y 
2
 +z 
2
 +...≤r 
2
 

Note: a point with no coordinates should return true, as in zero dimensions all points are the same point
*/

const inSphere = (coords, r) =>
  coords.reduce((sum, x) => sum + x ** 2, 0) <= r ** 2;

console.log(inSphere([0.5, 0.5], 1)); //True
