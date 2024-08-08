// ? You are required to implement a function generateHash that generates a hash tag from a given input string.
// The hash tag should be constructed as follows:
//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated
// together without spaces.
// P/? If the length of the input string is greater than 280 characters or if the input string is empty or
// contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.
//* Write a function generateHash to accomplish this task.



const hashTagGenerator = (str) => {
     if(str.length > 280 || str.trim().length === 0){
        return false;
     }
     str = str.split(" ")
     str = str.map((currStr)=>
        // currStr.replace(currStr[0],currStr[0].toUpperCase())
           currStr.charAt(0).toUpperCase() + currStr.slice(1)
     );
     return "#" + str.join("");
     

}

console.log(hashTagGenerator("my name is mukesh yadav")); 