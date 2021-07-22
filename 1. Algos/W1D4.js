// Functions
// Parts of a function
// KEYWORD -> function, name of the function (), inside the parens parameters (optional), return (optional)
function jimsCoolGreeter(statement = "hello", name = "world"){
    //CODE BLOCK
    console.log(statement + " " + name);
    return "bananas";
}    

// Function call
// Parts of the function call
// name of the function, parens w/ optioal arguments semi-colon

jimsCoolGreeter();
jimsCoolGreeter("goodbye","Daniel")

var fruit = jimsCoolGreeter()
console.log(fruit)

function calc(num1, num2, operator){
    var value;
    switch(operator){
        case "+":
            value = num1 + num2;
            break;
        case "-":
            value = num1 - num2;
            break;
        case "*":
            value = num1 * num2;
            break;
        case "/":
            value = num1 / num2;
            break
        default:
            value = "you did not provide a valid operator!"
    }
    console.log(value)
}
calc(5,5,"/")
