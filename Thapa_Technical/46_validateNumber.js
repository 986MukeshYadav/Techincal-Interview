//* Programming Challenge: Mobile Number Validation

//? Write a function that takes a string as input and returns true if the string represent a valid Indian mobile number, and false otherwise.
//* Validation Requirements:
//? Length: An Indian mobile number should have exactly 10 digits.
//? Starting Digit: The number must start with 6, 7, 8, or 9, which are valid starting digits for Indian mobile numbers.

function validateIndianMobileNumber(number) {
    const newnumber = /^[789][\d]{9}$/
    return newnumber.test(number)
}

// Example usage:
// Test Cases
console. log(validateIndianMobileNumber ("9876543210" )); // Expected output: true
console.log(validateIndianMobileNumber ("8235802223" )); // Expected output: true
console. log(validateIndianMobileNumber ("0123456789" )); // Expected output: false
console. log(validateIndianMobileNumber ("897654321" )); // Expected output: false
console. log(validateIndianMobileNumber ("7896543210" )); // Expected output: false