

// cool set of code!!
// below is the same as ... for(var i = 0; i<10; i++){
// console.log(i)
// }
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log(i)
if (i == 10) {
    console.log("free pizza for everyone!!")
}

// Define the function
// keyword   func name   parameters
function        pizzaGen(num1, num2) {
    //code block
    var i = 0;
    while (i < num1) {
        console.log(i);
        i++;
    }
    console.log(i);
    if (i == num1) {
        console.log( num2 + " free pizzas for everyone!!");
    }
    return num1
}
//call w/ arguments
pizzaGen(20,100);
// A function call is replaced by what it returns.
var x = pizzaGen(20, -5) + pizzaGen(10,10);

