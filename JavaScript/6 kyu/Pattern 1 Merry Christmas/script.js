/*
Description:
Here your task is to Create a (nice) Christmas Tree.

You don't have to check errors or incorrect input values, every thing is ok without bad tricks, only one int parameter as input and a string to return;-)...

So what to do?

First three easy examples:

Input: 3 and Output:
  *
 ***
*****
 ###
 
 Input 9 and Output:
    *
   ***
  *****
   ***
  *****
 *******
  *****
 *******
*********
   ###
   
 Input 17 and Output:
      *
     ***
    *****
     ***
    *****
   *******
    *****
   *******
  *********
   *******
  *********
 ***********
  *********
 ***********
*************
     ###
     
Really nice trees, or what???! So merry Christmas;-)
You can see, always a root, always steps of hight 3, tree never smaller than 3 (return "") and no difference for input values like 15 or 17 (because (int) 15/3 = (int) 17/3). That's valid for every input and every tree. Lines are delimited by \r\n and no trailing white space allowed. I think there's nothing more to say - perhaps look at the testcases too;-)!

There are some static tests at the beginning and many random tests if you submit your solution.
 

Hope you have fun:-)!
*/

const christmasTree = (height) => {
  if (height < 3) return "";

  const levels = Math.floor(height / 3);
  const maxStars = 1 + 2 * (levels + 1);
  const tree = [];

  for (let step = 0; step < levels; step++) {
    for (let i = 0; i < 3; i++) {
      const stars = 1 + 2 * (step + i);
      const spaces = Math.floor((maxStars - stars) / 2);
      tree.push(" ".repeat(spaces) + "*".repeat(stars));
    }
  }

  const trunkSpaces = Math.floor((maxStars - 3) / 2);
  tree.push(" ".repeat(trunkSpaces) + "###");

  return tree.join("\r\n");
};

console.log(christmasTree(10));

/*
    *
   ***
  *****
   ***
  *****
 *******
  *****
 *******
*********
   ###
*/
