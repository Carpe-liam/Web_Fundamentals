var letters = ['a','b','c','d']

function reverseArr(arr){
    var temp = "";
    var len = arr.length/2;
    for(let i=0; i < len; i++ ){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr
}

var newArr = reverseArr(letters)
console.log(newArr)