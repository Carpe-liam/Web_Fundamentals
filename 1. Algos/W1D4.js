// FUNCTIONS
    // - have two parts
    // - act like blueprints for something we want to do
    // - definition has paramaters and the call can have arguments
    // - to get data back from the function we need a return statement


// KEYWORD | NAME ( <optional parameters> ) { <CODE BLOCK> }
// definition
function greetings(aName){
    return null
    var passedName = aName;
    console.log("hello " + passedName);
} 

console.log(greetings("Alex"))