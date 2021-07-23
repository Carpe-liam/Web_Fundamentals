// var fruit1 = "apples";
// var fruit2 = "oranges";
// var temp = "";

// console.log("fruit1 = " + fruit1, "fruit2 = " + fruit2)

// temp = fruit1;
// fruit1 = fruit2;
// fruit2 = temp;

// console.log("fruit1 = " + fruit1, "fruit2 = " + fruit2)

// //while loops
// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// write a function reverse(arr) to reversa an array..
// ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];

function reverse(arr){
    var temp;
    var lastElem = arr.length - 1;
    for(var i = 0; i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[lastElem - i];
        arr[lastElem - i] = temp;
    }
    return arr;
}

var myArr = ["a", "b", "c", "d", "e"];
console.log(reverse(myArr));
console.log(myArr)