// 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).
// Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.

// Example usage:

const countVowels=(word)=>{
   let vowels = ["a","e","i","o","u"]
    let str = word.split("");   // word.split(" ").toLowerCase()
    let count = 0;
    // for(let i = 0 ; i <= str.length;i++){
    //     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || 
    //         str[i] === "O" || str[i] === "U")
    //         {
    //         count++;
    //        }
    // }
    // return count;

    //================================================
    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}


console.log(countVowels("Helloo world")); // Output: 3
console.log(countVowels("ThE quIck brOwn fOx")); // Output: 5
console.log (countVowels ("Brrrp")); // Output: 0