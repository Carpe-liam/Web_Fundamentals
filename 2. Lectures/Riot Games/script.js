console.error("Congrats you did something right!!")

var count = 0;
function countUp(){
    count++
    console.log("The current count is --> " + count)
    var elem = document.getElementById("logo-sprite")
    console.log(elem)
    elem.remove()
}

var opacity = 1;
var intervalID = 0;

function fadeOut(){
    // setTimeout(() => {
    //     setInterval(hide, 70)
    // }, 6000);
    setInterval(hide, 70)
    
}

function hide(){
    var myImg = document.getElementById("lol")
    
    opacity = Number(window.getComputedStyle(myImg).getPropertyValue('opacity'));
    if (opacity>0){
        opacity = opacity - 0.1;
        myImg.style.opacity = opacity
    } else {
        clearInterval(intervalID)
    }
}