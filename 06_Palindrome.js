// Write a function to determine whether a given string is
//a palindrome or not. A palindrome is a word, phrase,number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

const isPalindrome=(str)=>{
    str = str.toLowerCase().replace(/\W/g,"")
    console.log(str);
    
    newStr = str.split("").reverse().join("")
    
    return newStr === str ? true:false;
}

console. log (isPalindrome("A man, a plan, a canal,Panama")); // Output: true
console. log (isPalindrome ("racecar")); // Output: true
console. log (isPalindrome("hello")); // Output: false