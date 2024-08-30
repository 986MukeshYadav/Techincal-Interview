//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

const countChar = (word, char) => {
   word = word.toLowerCase()
   char = char.toLowerCase()

   totalCount = word.split("").reduce((acc,curr) => {
    if(curr === char){
       acc++;
    }
    return acc;  // return the accumulated count after each iteration
   },0)
  return totalCount;
}

console.log(countChar("HelloWorld", "l")); 




// ================================================================================
// console.log(Array.of(1,2,3,4,5)) // [1,2,3,4,5]
// console.log(String(12345).split("").map(Number)) // [1,2,3,4,5]