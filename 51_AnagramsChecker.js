function anagramChecker(a,b){
    return a.toLowerCase().split("").sort().join("") === b.toLowerCase().split("").sort().join("")
  }
  console.log(anagramChecker("listen","silent")); // true
  console.log(anagramChecker("listen","hello"));  //false