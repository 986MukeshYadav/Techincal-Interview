//? Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.
//? Your task is to implement the isEmptyObject function using JavaScript and return a message indicating whether the object is emptyPull up for or not.
//* Constraints:
//? The input object may have any number of properties, includile zeno
//? The function should return a message indicating whether the Second Method: A is emoty or not.

const isEmptyObject=(obj)=>{
    let objlength = Object.keys(obj).length
    if(objlength === 0){
        return "The object is empty."
    }
    return "The object is not empty."
}

console.log(isEmptyObject({})) // The object is empty.
console.log(isEmptyObject({name: "John", age: 30})) // The object is not empty.
console.log(isEmptyObject({name:null})) //The object is not empty.





