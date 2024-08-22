function findWordWithMostRepeats(words) {
    let maxCount=0;
    let mostRepeatedWord='';
   for(const element of words){
    let count={};
    let repeats = 0;
   
    for(const char of element){
        count[char]=(count[char] || 0)+1
    }
    repeats = Object.values(count).filter(v=>v > 1).length
    if(repeats > maxCount){
        maxCount = repeats;
        mostRepeatedWord = element;
    }
   }
   return mostRepeatedWord;
}

// Example usage
const words = ["programming", "algorithm", "data", "function"];
console.log(findWordWithMostRepeats(words)); // Output: "programming"




