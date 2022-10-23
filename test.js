


























const names = ['jesper', 'peter', 'elise', 'sarah', 'oliver', 'jasper'];

//Returns a filtered copy of the array with the names that ends with the letter r 
const result = names.filter(name => name.endsWith("r"));

const numbers = [4, 5, 7, 19]

//Returns a new array where the expression has been applied to all elementes of the array.
const result1 = numbers.map(number => number * 3);
console.log(result1)

//forEach executes a function for all elements of the array
const result2 = numbers.forEach(number => console.log(number));







//Storing a function in a variable.
let myFunction = function(){
    console.log("myFunction completed");
};
//Calls myFunction after 3 seconds has passed.
setTimeout(myFunction, 3000);

//To not use a variable to store the function we can add it to another function. 
setTimeout(function(){
    console.log("My other function completed");
}, 3000);


















//Regular way of writing a function.
function regularFunction(a, b) {
    return a + b
};
//Function converted to an arrow function.
const arrowFunction = (a, b) => a + b;


// && = and, Returns true
const test1 = (44 === 44) && ("Hello world" === "Hello world");

// && = and,  Returns false
const test2 = ((44 === 42) && ("Hello world" === "Hello world"));

// || = or,   Returns true
const test3 = ((44 === 42) || ("Hello world" === "Hello world"));



//This will give an error saying "Assignment to constant variable"
let variableName = "Hello world"
variableName = "New String"

//If we change const to let we will be able to reassign the variable 
let anotherVariableName = "Hello World"
anotherVariableName = "New String"


//Example of a string and a number being concatenated
const first = "19";
const second = 22;
let sum = first + second;
typeof(sum);
//Sum = 1922, typeof(sum) = string

//We can type cast our string into a number to add the varialbes as such. 
sum = Number(first) + second;
typeof(sum);
//Sum = 41, typeof(sum) = number


const value = 1;
const value1 = 2;

value < value1 // Returns true if value on left is less than value on the right. If not it returns false.
value > value1 // Returns true if value on left is greater than value on the right. If not it returns false.
value <= value1 // Returns true if value on left is left than or equal to the value on the right. If not it returns false.
value >= value1 // Returns true if the value on the left is greater than or equal to the value on the right. If not it returns false.
value == value1 // Return true if the value on the left is equal to the value on the right despite of data type. If not it returns false (Not recomended)
value === value1 // Returns true if the value on the left is equal to the value on the right. If not it returns false. 
value !== value1 // Returns true if the value on the left is not equal to the value on the right. If not it returns false.









