/* 
Input: Integer n
Output: String
Example:

a(4) prints as

   A   
  A A  
 A A A 
A     A
a(8) prints as

       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A
a(12) prints as

           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
Note:

Each line's length is 2n - 1
Each line should be concatenate by line break "\n"
If n is less than 4, it should return ""
If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)
*/

const a = (n) => {
  if (n < 4) return "";
  if (n % 2) n--;
  const w = 2 * n - 1,
    m = n / 2 + 1,
    lines = [];
  for (let i = 1; i <= n; i++) {
    if (i === m) {
      const c = n / 2 + 1,
        p = n - c;
      lines.push(" ".repeat(p) + Array(c).fill("A").join(" ") + " ".repeat(p));
    } else {
      const row = Array(w).fill(" "),
        x = n - i,
        y = x + 2 * (i - 1);
      row[x] = "A";
      row[y] = "A";
      lines.push(row.join(""));
    }
  }
  return lines.join("\n");
};

console.log(a(5));
/* 
   A   
  A A  
 A A A 
A     A
*/
