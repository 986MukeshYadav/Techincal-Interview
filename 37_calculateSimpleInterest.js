//* Programming Challenge: Simple Interest Calculator
//*•
//? Write a function calculateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.

const calculateSimpleInterest=(p, t, r)=>{
 return (p*t*r)/100
}
console. log(calculateSimpleInterest (1000, 5, 3)); // Output: 150