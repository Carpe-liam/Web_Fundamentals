// DATA TYPES
// strings
var myString = "Hello World"; // "a", "2", " "
// numbers
var myNumber = 42;
// boolean
var isTired = true;
// arrays
var myArray = [1, 2, 3, "hello world", true];

var myNewVar = myArray;

// predict the output
var a = 25;
a = a - 13;
console.log(a / 2);

a = "hello";
console.log(a + " hello");

// predict loops
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}

console.log("outside of the loop " + i);

// var j = 0;
// while(j<10){
//     console.log(j);
//     j = j + 3;

//     j++;

// }

function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);
}

getTotal([1, 3, 5]);


function myCoolFunc(num){
    var myNum1 = 100;
    console.log(myNum1)
    for(let i = 0; i < 3; i++){
        console.log("inside for loop " + i);
    }
    // console.log("outside forloop " + i);
    console.log(num);
    return "bananas";
}

var fruit = myCoolFunc(10);
console.log(fruit)
