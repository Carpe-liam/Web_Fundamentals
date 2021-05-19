// Create a function that counts and console logs 1 to 10 while summing the numbers.  The function should return the sum.

// 1. create a function [x]
// 2. create some variables [x]
// 3. create a for loop that starts at 1 ends at 10 in steps of 1 [x]
// 4. console log the current value of the the for loop is at [x]
// 5. sum the numbers [x]
// 6. return the sum [x]


function interview1(){
    var sum = 0;
    for(var i = 1; i <=10; i++){
        console.log(i);
        sum = sum + i
        // sum+=i
    }
    return sum
}





// What about booleans?
// what do the following mean?
// True or false:
// is 2 equal to 2?  true
// is 9 equal to "nine"? false
// is "" equal to ""? true
var isTired = true;
var currName = "Jim"
if(currName == "Jim"){
    console.log("im tired")
} else {
    console.log("super ready for class")
}

if(isTired == true)



var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
} 
whatToBring += "and a smile!";



    
console.log(whatToBring);
