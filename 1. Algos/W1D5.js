// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);

// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);


var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

for(var start = 0; start<end; start+=2){
    console.log("start: " + start + ", end: " + end);
}

// var isAlive = true
// function runGame(){
//     while(isAlive){
//         clearScreen();
//         ckhPlayerPosition();
//         movePlayer(event);
//         chkCollisions();
//         chkDammage()
//         checkIfAlive() //set isAlive to false
//         drawScreen()
//     }
// }

// runGame()