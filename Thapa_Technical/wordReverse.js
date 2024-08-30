// 1) Write a program to find reverse word from a sentence like "I am Mukesh" output : "Mukesh am I" ?
function wordReverse(str){
    return str.split(' ').reverse().join(' ');
}

const sentence = "Hello World!";
console.log(wordReverse(sentence));