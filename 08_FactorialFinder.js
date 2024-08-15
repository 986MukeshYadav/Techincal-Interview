// Challenge: Factorial Finder
// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n! is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.
// Here are some examples of factorial calculations:
// factorial (0) => 1
// factorial (1) => 1
// factorial (2) => 2
// factorial (3) => 6
 
function factorial(num) {
if(num == 0){
    return 1;
}

let result = 1;
for(let i = 1 ; i <= num ; i++){
    result = result * i;
}

return result;


}

console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(2)); // Output: 2
console.log(factorial(3)); // Output: 6
console.log(factorial(5)); // Output:120
