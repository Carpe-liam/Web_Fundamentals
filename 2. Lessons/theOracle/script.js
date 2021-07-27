console.log("Nailled it!!!")

function changeCard(elem){
    console.log(elem.classList);
    elem.classList.remove("unRotated");
    elem.classList.add("rotate");
    setTimeout(()=>{
        elem.classList.add("whiteBack")
    }, 250)
}

function flipBack(elem){
    elem.classList.remove("rotate");
    elem.classList.add("unRotated");
    setTimeout(()=>{
        elem.classList.remove("whiteBack")
    }, 250)
}

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Cooking With Jim!!."
];

function oracle(elem){
    var answer = lifesAnswers[Math.floor(Math.random()* lifesAnswers.length)];
    console.log(answer);
    elem.style.display = "none" 
    var msg = document.querySelector(".message")
    msg.innerHTML = answer;
    setTimeout(()=>{
        msg.innerHTML = ""
        elem.style.display = "inline-block"
    }, 5000)
}

