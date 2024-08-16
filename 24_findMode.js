//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).
function findMode(arr) {
    let countObj = {};
    let maxcount=0;
    let keys= null;

    for(const element of arr){
        countObj[element] = (countObj[element] || 0 ) + 1
        if(countObj[element] > maxcount){
            maxcount = countObj[element]
            keys = element
        }
    }
    return keys;
}
console.log(findMode([1, 2, 2, 3, 1, 4, 21])); // Output: 2
//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).