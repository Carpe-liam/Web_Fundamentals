var num1 = 5 

function addTwoNums(num1, num2){
    var sum = 0;
    sum = num1 + num2;
    console.log(sum); // <--- 23
    return sum
};

var numSum = addTwoNums(10,13)
console.log(numSum) // <--- undefined