// ? Write a function to sort an array of numbers in an
// Example usage:
// console. log(sortAscending([5, 3, 1, 8])); // Output:
//console. log(sortAscending([5, 3, 10, 8])); // Output: [3
//console. log(typeof sortAscending[2]);
//todo Requirements:
//? The function should take an array of numbers as inpu
//? It should return a new array with the numbers sorte Discussion on issues
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort) method.

const sortAscending=(arr)=>{
    return arr.sort((a,b)=>a-b)
}

console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]