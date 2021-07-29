// console.log("hey i did it")

function createNachos(){
    var chipTyp = document.querySelector("#chips")
    var cheeseTyp = document.querySelector("#cheese")
    console.log(chipTyp.value, cheeseTyp.value)
    document.querySelector("#nachoDisp").innerHTML = "You Selected: " + chipTyp.value + " Chips with " + cheeseTyp.value + " cheese"
}