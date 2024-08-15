//?. 17. write a function to convert a string to camelCase.

// function toCamelCase(word){
//     let str = word.trim().split(" ");
//          str = str.map((currword, index) => {
//             if(index === 0){
//                 return currword.toLowerCase();
//             }else{
//                 return currword.charAt(0).toUpperCase()+currword.slice(1).toLowerCase()
//             }
//     });
//     return str.join("")
// }

// console.log(toCamelCase("hello world")); // Output: helloWorld
// console.log(toCamelCase("this is a test")); // Output: thisIsATest
// console.log(toCamelCase("convert_this-string to camelCase!"))


//==================================================================================================
function toCamelCase(word) {
    return word
        .toLowerCase()  // Convert the entire string to lowercase
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());  // Convert first character of each word after non-alphanumeric characters to uppercase
}

console.log(toCamelCase("hello woRld")); // Output: helloWorld
console.log(toCamelCase("this is a test")); // Output: thisIsATest
console.log(toCamelCase("convert_this-string to camelCase!")); // Output: convertThisStringToCamelCase
