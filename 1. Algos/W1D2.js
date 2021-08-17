// VARIABLES - something that holds a data type
// Datatypes
// Keyword name = value
var myStr = "Hello World" // string
var myNum = 42 // number
var isTired = true // bool

console.log("hello world")  //outputs text to the console

// Predict 1
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a , " hello");

//Predict 2
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);


// Predict 3

// Function definition
//keyword | name ( optional PARAMETERS ) | { CODE BLOCK }
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);

}

// Function Call
getTotal([1, 3, 5]);