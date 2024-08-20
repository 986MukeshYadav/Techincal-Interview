const LongestCharacter = (str) =>{
    let newStr =str.toLowerCase().split(" ")
   
   
    let maxNotRepeat = 0;
    let result = 0;
    for(const element of newStr){
        let count ={}
        let repeats = 0
        for(const newElement of element){
            count[newElement] = (count[newElement] || 0) +1
        }
        repeats = Object.values(count).filter(v => v < 2).length
        
        
        if(repeats > maxNotRepeat){
            maxNotRepeat = repeats
            result = element
        }
        
    }
    return result
}

console.log(LongestCharacter("My Name is Ranjan Yadav From Kathmndu Ramayana"))