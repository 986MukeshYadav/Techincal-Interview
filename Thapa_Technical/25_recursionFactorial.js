//* write a function to calculate the factorial of a number.(using Recursion)

//Recursion:

//? Recursion is a programing technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input uncil it reaches a base case.

//* Base Case:

//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

//* Recursive Case:

//? The recursive case is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.


const factorial=(n)=>{
    if(n===0 || n===1){
        return 1;
    }
    return n * factorial(n-1)
}

console.log(factorial(5)) // Output: 120
console.log(factorial(7)) // Output: 5040