/* 
Task
Given n representing the number of floors build a beautiful multi-million dollar mansions like the ones in the example below:

     /\
    /  \
   /    \
  /______\  number of floors 3
  |      |
  |      |
  |______|

     /\
    /  \
   /____\
   |    |   2 floors
   |____|

     /\
    /__\    1 floor
    |__|
Note: whitespace should be preserved on both sides of the roof. Number of floors will go up to 30. There will be no tests with invalid input.

If you manage to complete it, you can try a harder version here.

Good luck!
*/

const myCrib  = (n) => {
  let house = [];
  for (let i = 0; i < n; i++) {
    house.push(
      " ".repeat(n - i) + "/" + " ".repeat(i * 2) + "\\" + " ".repeat(n - i)
    );
  }
  let underRoof = "/" + "_".repeat(n * 2) + "\\";
  house.push(underRoof);
  for (let i = 0; i < n - 1; i++) {
    house.push("|" + " ".repeat(n * 2) + "|");
  }
  let ground = "|" + "_".repeat(n * 2) + "|";
  house.push(ground);
  return house.join`\n`;
}

console.log(myCrib(25));

/* 
                         /\                         
                        /  \                        
                       /    \                       
                      /      \                      
                     /        \                     
                    /          \                    
                   /            \                   
                  /              \                  
                 /                \                 
                /                  \                
               /                    \               
              /                      \              
             /                        \             
            /                          \            
           /                            \           
          /                              \          
         /                                \         
        /                                  \        
       /                                    \       
      /                                      \      
     /                                        \     
    /                                          \    
   /                                            \   
  /                                              \  
 /                                                \ 
/__________________________________________________\
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|                                                  |
|__________________________________________________|
*/
