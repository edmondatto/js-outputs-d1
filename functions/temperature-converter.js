// A JS script that makes use of functions, variables and operators to convert
// temperature values to celsius

let valueToConvert = prompt('Enter the Fahrenheit temperature value to convert: ');

const toCelsius = () =>
  (5 / 9) * (valueToConvert - 32);

console.log('The equivalent value on the celsius scale is:', toCelsius());