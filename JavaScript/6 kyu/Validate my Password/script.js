/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/

const validPass = (password) => {
  if (password.length < 4 || password.length > 19) {
    return "INVALID";
  }
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return "INVALID";
  }
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return "INVALID";
  }
  return "VALID";
};

console.log(validPass("Username123"));
