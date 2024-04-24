/*
Task
Create three components. Following the provided rules
One component should be named Hello and it should return 'Hello' wrapped inside of h1.
The second component should be named World and it should return 'World!' wrapped inside of h2.
Create a parent component using class syntax called Greet and nest previous two components inside of it, wrapping them with a div.
If you are stuck, refer to examples provided here. Good luck! :)

There might be some problem with spaces (like you've inserted some extra spaces that make tests fail). It's easy to solve them by reading the error message. So it's never a problem. :)
*/

const React = require("react");
const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>;

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}

//React is crap in what world do you want HTML in your JS?!?!?!
