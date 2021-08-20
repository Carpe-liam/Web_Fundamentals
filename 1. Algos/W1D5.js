// // Loops

// for(var i =0; i<5; i++){
//     console.log(i)
// }

// var i =0;
// while(i<5){
//     console.log(i)
//     i++
// }


// // swaping variables

// var fruit1 = "apples";
// var fruit2 = "oranges";
// var temp = "";


// console.log("before swap: " + fruit1 + " " + fruit2)

// temp = fruit1;


// fruit1 = fruit2;


// fruit2 = temp

// console.log("after swap: " + fruit1 + " " + fruit2)


// var arr = ["oranges", "apples"]

// var arrTemp = "";
// console.log(arr)
// arrTemp = arr[0];
// arr[0] = arr[1];
// arr[1] = arrTemp
// console.log(arr)




// Reversing an array 

var arr1 = ["a", "b", "c", "d", "e","f"];

function revArr(arr){
    var newArr =[];
    for( var i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    // console.log(newArr);
    return newArr;
}

var arr2 = revArr(arr1)

console.log(arr1, arr2)


var arr5 = ["a", "b", "c", "d", "e","f"];

function revArr1(arr){
    var temp;
    for( var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1 - i] = temp;
    }
    // console.log(arr);
    return arr
}

var arr3 = revArr1(arr5)
console.log(arr5, arr3)