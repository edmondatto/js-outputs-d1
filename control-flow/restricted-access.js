// A JS script that makes use of control flow, variables and operators to
// enforce restricted access

let name = prompt('What is your name?');
let yearOfBirth = prompt('Which year were you born?');
let currentYear = new Date();

const ageCalculator = () =>
  currentYear.getFullYear() - yearOfBirth;

let checkAccess = () => {
  const age = ageCalculator();
  let result;
  if (age < 10) {
    return result = 'Access denied!';
  } else if (age >= 10) {
    return result = 'Access granted!';
  } else {
    return result = 'Please enter a valid birth year';
  }
};

console.log(checkAccess());