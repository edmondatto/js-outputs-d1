// A JS script that makes use of variables and operators to calculate
// a person's current age given their birth year

let yearOfBirth = prompt('Enter your year of birth: ');
let currentYear = new Date();

let currentAge = currentYear.getFullYear() - yearOfBirth;

console.log('Your current age is:', currentAge);

