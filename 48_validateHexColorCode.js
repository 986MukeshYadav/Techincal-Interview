//* Programming Challenge: Validate Hex Color Code
//? Write a regular expression to validate a hex color code (e.g.,[#а3с113).
    //* Requirements
    //? The hex color code should start with "#".
    //? It should be followed by either 3 or 6 hexadecimal characters.
    //* Use Cases
    //? Validating color codes in design tools.
    //? Ensuring consistent color code format in CSS.
    //? Filtering valid hex color codes in data processing.

    //* Hints
    //? Use regular expressions to match patterns in strings.
    //? Use the match method to extract matched substrings.
    //* Use the test method to check if a string matches a regular expression.
    //* Use the toUpperCase method to convert hexadecimal characters to uppercase.

const validateHexColor = (colorCode) => {
return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(colorCode)

}
console.log(validateHexColor("#a3c113")); // Expected output: true
console.log(validateHexColor("#fff")); // Expected output: true
console.log(validateHexColor("#1234567")); // Expected output: false
console.log(validateHexColor("a3c113")); // Expected output: false
console.log(validateHexColor("#g3c113")); // Expected output: false