//* Write a function called truncateString that takes two parameters:
//? str: A string that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the
const truncateString=(words,num)=>{
    if(num <= 0){
        return words
    }
    else if(words.length > num){
        return words.slice(0,num) + "...";
    }
    return words;  
    
    //=========================================================================
   // return num <= 0 ? words : words.slice(0,num) + "...";


   
}
console. log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Output: "A-tisket ...
//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The maximum length maxLength will be a positive integer.
//? The output string length should not exceed maxength + 3 characters due to the addition of ' ...'.