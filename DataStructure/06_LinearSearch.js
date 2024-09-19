//Golbal LinearSearch
//LinearSearch

const linearSearch=(arr,target)=>{
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
//Time Complexity = O(n)
//Space Complexity = O(1)

console.log(linearSearch([1, 2, 3, 4, 5], 3)) // Output: 3
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // Output: -1


//==============================================

const golbalLinearSearch=(arr,target)=>{
    const result=[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === target){
            result.push(i)
        }
    }
   if(arr.length === 0) return -1
   return result
//Time Complexity = O(n)
//Space Complexity = O(n)
}
console.log(golbalLinearSearch([1, 2, 3, 4, 5, 3], 3)) // Output: [2,5]


// Linear Search

// Time Complexity:
// Best Case: O(1)
// Average Case: O(n)
// Worst Case: O(n)
// Space Complexity: O(1)