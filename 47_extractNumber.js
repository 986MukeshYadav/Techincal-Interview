//? Write a regular expression to extract all numbers from a given string
//* Requirements
//? Extract all numbers from a string.
//? Return the numbers as an array.

function extractNumbers(str) {
    let num = str.match(/\d+/g)
    return num
   
}

//? Test Cases
//* Use Cases
//? Parsing numerical data from text.
//? Extracting numeric values for calculations.
//? Filtering numbers from mixed content.

console.log(extractNumbers ("abc123def456" )); // Expected output: ["123", "456"]
console.log(extractNumbers ("no numbers here")); // Expected output: null
console.log(extractNumbers ("1a2b3c4d")); // Expected output: ["1", "2", "3", "4"]
console.log(extractNumbers("100, 200 and 300")); // Expected output: ["100", "200", "300" ]
console.log(extractNumbers("")); // Expected output: null

//todo \d: Matches any digit (0-9).
//todo +: Matches one or more of the preceding token (i.e., digits).
//todo g: Global flag, to find all matches in the string.