//? Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "YyYY-MM-DD".
// Hint
// Days= 24*60*60*1000

const calculateDaysBetweenDates = (date1, date2) => {
    let date12 = new Date(date1);
    let date22 = new Date(date2);
  
    // Calculate the difference in time in milliseconds
    let diffTime = Math.abs(date22 - date12);
  
    // Convert the time difference to days
    let diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays; //for days

    //=============================================================
    // return diffDays/365
  }
  
  console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31")); // Output: 30
  console.log(calculateDaysBetweenDates("2024-03-23", "2024-08-17")); // Output: 31
  