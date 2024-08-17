//* Programming Challenge: Calculate Age from birthDate
//? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD"
//* Requirements:
//? The function must handle leap years and varying numbers of days in accurately.
//? Consider the timezone difference and ensure the age is calculated the current date in your local time zone.
//? The output should be the age in whole years.

//Hint
//1. to get todayDate
//2.get birthday date and subtact it 
//3. return the result in whole years
//4. get months

const calculateAge=(d)=>{
    let todayDate = new Date();
    let birthDate = new Date(d);
    let age = todayDate.getFullYear() - birthDate.getFullYear();
    let mon = todayDate.getMonth() - birthDate.getMonth();
    if(mon < 0 || mon === 0 && todayDate.getDate() - birthDate.getDate()){
        age--;
    }
    return age;
}

console.log(calculateAge("1990-09-15")); // Output: 30
console.log(calculateAge("2002-03-23")); // Output: 22