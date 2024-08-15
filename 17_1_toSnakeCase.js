//?. 17. write a function to convert a string to snakeCase.

function toSnakeCase(word){
    return word.trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g,"_")
}

console.log(toSnakeCase("Hello World")); // Output: hello_world
console.log(toSnakeCase("convertThis String to snake_case")); // Output: convertthis_string_to_snake_case
console.log(toSnakeCase("  trim-and_replace non_alpha!")); // Output: trim_and_replace_non_alpha