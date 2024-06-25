/*
Given a string with friends to visit in different states:

ad3="John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA"
we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

Massachusetts
.....^John Daggett 341 King Road Plymouth Massachusetts
.....^Sal Carpenter 73 6th Street Boston Massachusetts
^Virginia
.....^Alice Ford 22 East Broadway Richmond Virginia
Spaces not being always well seen, in the above result ^ means a white space.

The resulting string (when not printed) will be:

"Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"
or (the separator is \n or \r\n depending on the language)

"Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"
Notes
There can be a blank last line in the given string of addresses.
The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
You can see another example in the "Sample tests".
States
For the lazy ones:

'AZ': 'Arizona',
'CA': 'California',
'ID': 'Idaho',
'IN': 'Indiana',
'MA': 'Massachusetts',
'OK': 'Oklahoma',
'PA': 'Pennsylvania',
'VA': 'Virginia'
*/

function byState(str) {
  const addresses = str.trim().split("\n");
  const stateGroups = {};
  const states = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia",
  };
  addresses.forEach((address) => {
    const state = states[address.match(/[A-Z]{2}$/g)[0]];
    if (!stateGroups.hasOwnProperty(state)) stateGroups[state] = [];
    stateGroups[state].push(address.slice(0, -2).split(",").join("") + state);
    stateGroups[state] = stateGroups[state].sort((a, b) => {
      if (a > b) return 1;
      else return -1;
    });
  });

  let output = "";
  Object.keys(stateGroups)
    .sort((a, b) => (a > b ? 1 : -1))
    .forEach((state) => {
      output += "\r\n " + state;
      stateGroups[state].forEach((address) => {
        output += "\r\n..... " + address;
      });
    });

  return output.trim();
}

var case1 = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Orville Thomas, 11345 Oak Bridge Road, Tulsa OK
Terry Kalkas, 402 Lans Road, Beaver Falls PA
Eric Adams, 20 Post Road, Sudbury MA
Hubert Sims, 328A Brook Road, Roanoke MA
Amy Wilde, 334 Bayshore Pkwy, Mountain View CA
Sal Carpenter, 73 6th Street, Boston MA`;

console.log(byState(case1));
/*
California
..... Amy Wilde 334 Bayshore Pkwy Mountain View California
 Massachusetts
..... Eric Adams 20 Post Road Sudbury Massachusetts
..... Hubert Sims 328A Brook Road Roanoke Massachusetts
..... John Daggett 341 King Road Plymouth Massachusetts
..... Sal Carpenter 73 6th Street Boston Massachusetts
 Oklahoma
..... Orville Thomas 11345 Oak Bridge Road Tulsa Oklahoma
 Pennsylvania
..... Terry Kalkas 402 Lans Road Beaver Falls Pennsylvania
 Virginia
..... Alice Ford 22 East Broadway Richmond Virginia
*/
