/* 
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/

const rooms = {
  name: { name1: "The Room", name2: "The Other Room", name3: "Another Room" },
  description: {
    description1: "The room that you are presumably trapped in",
    description2: "Another room your perhaps trapped in?",
    description3: "Or maybe its this one?",
  },
  completed: { completed1: false, completed2: true, completed3: false },
};
