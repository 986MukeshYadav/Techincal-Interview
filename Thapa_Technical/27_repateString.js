//* Write a function called repeatString that takes two parameters:
//? str: A string that needs to be repeated.
//? num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.

function repeatString(str, num) {
    //  return num > 0 ? str.repeat(num) : str;

    //===================================================================

  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
console. log(repeatString("abc", 5)); // Output: "abcabcabcabcabd"



//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.