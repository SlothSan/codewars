/*
Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}
The returned objects must have the following structure:

{
  state: "AK",
  count: 25
}
The states must be ordered by first appearance.

An error is expected if an input object doesn't have a state property.
*/

const count = (addres) => {
  const states = addres.reduce((obj, { state }) => {
    if (!state) throw new Error();
    obj[state] = (obj[state] || 0) + 1;
    return obj;
  }, {});
  return Object.keys(states).map((state) => ({ state, count: states[state] }));
};

console.log(
  count([
    { house: 1, street: "Binary St.", city: "Zero Value", state: "AK" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "AR" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "OR" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "CA" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "AK" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "OR" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "OR" },
  ])
);

/*
[
  { state: 'AK', count: 2 },
  { state: 'AR', count: 1 },
  { state: 'OR', count: 3 },
  { state: 'CA', count: 1 }
]
*/
