
const largetString = (str) =>{
    if(str.trim().length === 0){
        return "Input string is empty";
    }

    let word = str.split(" ");
    // word = word.sort((a,b)=>b.length - a.length)
    // console.log(word);
    // return word[0]

    //Reduce method
    
    return word.reduce(
        (acc,curr)=>curr.length > acc.length ? curr : acc ," ")
}

console.log(largetString("Hello World This mukeshkumaryadav is a Test")); 