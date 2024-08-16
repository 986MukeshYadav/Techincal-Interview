//* Write a function called simplePasswordValidator that takes a single parameter:
//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:
//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise, it should return falsi
//* Input:
//? password: A non-empty string representing the password to be validated.
//* Output:
//? true if the password meets all the criteria.
//? false otherwise.
//* Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.















const simplePasswordValidator=(str)=>{
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let digit = /[0-9]/;
    let length = /^.{8,}$/;
    return length.test(str) && lowercase.test(str) && uppercase.test(str) && digit.test(str);
}




console.log(simplePasswordValidator("afkdsfadsf")); // Output: false
console.log(simplePasswordValidator("afkdsfadsf1")); // Output: false
console.log(simplePasswordValidator("afkdsfadsf1A")); // Output: true
console.log(simplePasswordValidator("afkdsfadsf1Aa")); // Output: true