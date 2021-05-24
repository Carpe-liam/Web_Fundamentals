console.log("hello World")

function changeCard(elem){
    console.log(elem)
    elem.classList.add("rotate")
    elem.classList.remove("unRotated")
    setTimeout(() => {
        elem.style.background = "black"
    }, 300);
}

function flipBack(elem){
    elem.classList.remove("rotate")
    elem.classList.add("unRotated")
    setTimeout(() => {
        elem.style.background = "radial-gradient(circle, rgba(219,17,17,1) 30%, rgba(130,0,0,1) 59%, rgba(0,0,0,1) 100%)"
    }, 300);
}