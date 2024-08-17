//? Create a function following criteria:
//validatePasswora that checks if a given password string meets the
//? Minimum Length: The password must be at least 8 characters long.
//? Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//? Numerical Requirement: The password must contain at least one digit.
//? Special Character Requirement: The password must have at least one special character from the set !a#$%^&*()-_+=•
//* Requirements
//? The function should return true if the password meets all the criteria, and false
//otherwise.
//? You are to imnlement this function using lavaScrint
function validatePassword(password){
   const newpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
  return newpassword.test(password); 
}

// Example 1
console. log(validatePassword("Pass123!")); // Output: true
// Example 2
console.log(validatePassword("password")); // Output: false (fails due to lack of uppercase, digits, and special characters)


//==================================================================
// (?=.*[A-Z]) ensures the presence of at least one uppercase letter.
// (?=.*[a-z]) ensures the presence of at least one lowercase letter.
// (?=.*[0-9]) ensures the presence of at least one digit.
// (?=.*[\W_]) ensures the presence of at least one special character (non-word character or underscore).
// . {8,} ensures that the total length of the password is at least 8 characters.