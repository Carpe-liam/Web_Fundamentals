console.error("Congrats you did something right!!")

var count = 0;
function countUp(){
    count++
    console.log("The current count is --> " + count)
    var elem = document.getElementById("logo-sprite")
    console.log(elem)
    elem.remove()
}
