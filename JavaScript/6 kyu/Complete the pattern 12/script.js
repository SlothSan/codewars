/* 
Task:
You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, where n is parameter.

Note:Returning the pattern is not the same as Printing the pattern.
Parameters:
pattern(        n        );
                ^                     
                |                     
         Term upto which   
       Basic Pattern(this)     
            should be         
             created            
                              
                            
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
The length of each line is same, and is equal to the length of longest line in the pattern i.e (2n-1).
Range of Parameters (for the sake of CW Compiler) :
n ∈ (-∞,100]
Examples:
pattern(5):

  1       1
   2     2 
    3   3  
     4 4   
      5    
     4 4   
    3   3  
   2     2 
  1       1
 
  
pattern(10):

  1                 1
   2               2 
    3             3  
     4           4   
      5         5    
       6       6     
        7     7      
         8   8       
          9 9        
           0         
          9 9        
         8   8       
        7     7      
       6       6     
      5         5    
     4           4   
    3             3  
   2               2 
  1                 1
pattern(15):

  1                           1
   2                         2 
    3                       3  
     4                     4   
      5                   5    
       6                 6     
        7               7      
         8             8       
          9           9        
           0         0         
            1       1          
             2     2           
              3   3            
               4 4             
                5              
               4 4             
              3   3            
             2     2           
            1       1          
           0         0         
          9           9        
         8             8       
        7               7      
       6                 6     
      5                   5    
     4                     4   
    3                       3  
   2                         2 
  1                           1
*/

const pattern = (n) => {
  if (n < 1) return "";
  let spc = Array(n).join(" "),
    line = spc + (n % 10) + spc,
    output = [line],
    r = n;
  while (--r > 0) {
    spc = Array(r).join(" ");
    line = spc + (r % 10) + Array(2 * (n - r)).join(" ") + (r % 10) + spc;
    output.unshift(line);
    output.push(line);
  }
  return output.join("\n");
};

console.log(pattern(10));

/*
1                 1
 2               2 
  3             3  
   4           4   
    5         5    
     6       6     
      7     7      
       8   8       
        9 9        
         0         
        9 9        
       8   8       
      7     7      
     6       6     
    5         5    
   4           4   
  3             3  
 2               2 
1                 1

*/
