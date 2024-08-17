//* Your task is to implement two functions:
//? Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.
//? Convert Array to Object: Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.

// Example:

let obj={
    name: "Mukesh Yadav",
    age: 22,
    city: "Jankapur"
}


//function to converts object ot array.

let newarray = Object.entries(obj)
console.log(newarray.flat()) // Output: [ 'name', 'Mukesh Yadav', 'age', 22, 'city', 'Jankapur' ]

//function to convert array to object.

let newobj = Object.fromEntries(newarray)
console.log(newobj) // Output: { name: 'Mukesh Yadav', age: 22, city: 'Jankapur' }