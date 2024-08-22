// Write a function arraysAreEqual that takes two arrays arri and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order),and false otherwise.* Pull up for precis
// Example usage:

const arraysAreEqual=(arr1,arr2)=>{
  if(arr1.length !== arr2.length){
    return false;
  }
//  return arr1.every((currValue,index) => currValue == arr2[index])
 
//====================================================================
 // using simple for loop to compare each element of both arrays
for(let i = 0 ;  i<=arr1.length;i++){
  if(arr1[i] !== arr2[i]){
    return false;
  }
}
return true
}

console.log(arraysAreEqual([1,2,3],[1,2,3])); // true
console.log(arraysAreEqual([1,2,3],[1,2,4])); // false
 console.log(arraysAreEqual([1,2,3,4,5],[1,2,3,4,5])); // true










