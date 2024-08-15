//? 17: Write a function to check if a character is uppercase or lowercase.
//* Constraints:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of lengt.
// Example usage:

function isUpperCase(char){
       
    // if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
    //     return true;
    // }
    // return false;

//===========================================================
return char === char.toUpperCase()


}



console.log(isUpperCase("S")); // Output: true
//console.log(isLowerCase("b")); // Output: true
