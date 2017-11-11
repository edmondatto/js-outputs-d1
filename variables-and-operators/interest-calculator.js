// A JS script that makes use of variables and operators to calculate
// the accrued amount of a fixed deposit given the principal, interest
// rate and period

let principal = prompt('Enter the value of the principal amount: ');
let interestRate = prompt('Enter the value of the interest rate: ');
let period = prompt('Enter the value of the time period (in years): ');

const accruedAmount = principal * (Math.pow(1 + (interestRate / 100), period));

console.log('The Accrued amount after %s years is:', period, accruedAmount);

