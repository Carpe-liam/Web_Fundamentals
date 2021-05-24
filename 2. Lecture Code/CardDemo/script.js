console.log("Yayyy you did it")


function changeCard(elem){
    // console.log(elem)
    elem.classList.remove("unRotated")
    elem.classList.add("rotate")
    setTimeout(()=>{
        // elem.classList.("addBlackBackground");
    }, 300)
}

function flipBack(elem){
    elem.classList.remove("rotate")
    elem.classList.add("unRotated")
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
    "Very doubtful."
];



function oracle(elem) {
    var answer = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)];
    elem.innerHTML = answer
    console.log(answer)
    setTimeout(() => {
        elem.innerHTML = "Fortune";
    }, 5000);
    return answer;
}
// var magic8Ball = oracle();
// console.log(magic8Ball);