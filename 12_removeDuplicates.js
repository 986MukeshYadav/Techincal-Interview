// 12: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.
// The new Set() method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.
// Constraints:
// The input array may contain both positive and negative integers.
// The input array may be empty-
// The elements in the input array are not guaranteed to be sorted.
// The output array should retain the original order of elements from the input array.

const removeDuplicates=(arr)=>{

    // Using Set to remove duplicates
    // let newarr = [...new Set(arr)]
    // return newarr

    //==========================================================
    // Using filter method to remove duplicates
     return arr.filter((value, index, self) => self.indexOf(value) === index)

     //==========================================================
     // Using reduce method to remove duplicates
     // return arr.reduce((acc, curr) => {
     //     if (!acc.includes(curr)) {
     //         acc.push(curr);
     //     }
     //     return acc;
     // }, []);

     //==========================================================
    // Using for loop to remove duplicates
     let newarr = [];
     for(let i=0; i<arr.length; i++){
         if(!newarr.includes(arr[i])){
             newarr.push(arr[i]);
         }
     }
     return newarr;




}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 6, 5, 7, 8, 9, 1, 2, 3])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(removeDuplicates([])); // Output: []
console.log(removeDuplicates([-1, -2, -3, -2, -4, -5, -6, -5, -7, -8, -9, -1, -2, -3])); // Output: [-1, -2, -3, -4, -5, -6, -7, -8, -9]