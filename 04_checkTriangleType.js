//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

const checkTriangleType=(side1 , side2 ,side3)=>{
    if(side1 === side2 && side2 === side3){
        return "equilateral"
    } else if(side1 === side2 || side2 === side3 || side1 === side3){
        return "isosceles"
    } else {
        return "scalene"
    }
}

console.log(checkTriangleType(3,3,3))
console.log(checkTriangleType(3,4,3))
console.log(checkTriangleType(3,4,5))
