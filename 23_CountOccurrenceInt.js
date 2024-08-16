// Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

const CountOccurrence=(arr)=>{
    let countObj = {};
    let maxCount = 0;
    let keys = null ;
    // arr.forEach(element => {     //elements => numers of array are presents 
    //     if(countObj[element]){   // if presents then increment it 
    //         countObj[element]++;
    //     }else{
    //         countObj[element] = 1;   // Otherwise push 1 in countObj 
    //     }
    // });
    
    // return countObj;


    //============================================================

    for(const element of arr){
       countObj[element] = (countObj[element] || 0 ) + 1;
       if(countObj[element] > maxCount){
        maxCount = countObj[element];
        keys = [element];
       }
    }

    
    return countObj;
    // return keys; // for largest number
    // return maxCount; // for largest count
 
}

console.log(CountOccurrence([1, 2, 3, 2, 3, 4, 5, 2])); // Output: { 1: 1, 2: 3, 3: 2, 4: 1, 5: 1 }
console.log(CountOccurrence([1, 1, 1, 1, 1])); // Output: { 1: 5 }