console.log("you made it work!!!")

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

function eightBall(arr){
    var rand = Math.random()
    var len = arr.length
    var choice = Math.floor(rand*len)
    return arr[choice]
}


var img = document.querySelector("#myGif");
var truth = document.querySelector("#truth");
var question = document.querySelector("input")
var opacity = 1;
var opacity1 = 0;
var intervalID = 0;

function askQuestion(){
    console.log(question.value);
    if(question.value != ""){
        var theTruth = eightBall(lifesAnswers);
        truth.innerHTML = theTruth
        img.style.display="inline-block"
        setTimeout(()=> {
            setInterval(hideElement,70)
        }, 6000)
        setTimeout(() => {
            truth.style.opacity = 1
        }, 6000);
        
    } else {
        alert("ask a question dummy!!")
    }
}

function hideElement(){
    var opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'))

    if (opacity>0){
        opacity = opacity - 0.1;
        img.style.opacity = opacity;
    } else {
        clearInterval(intervalID)
    }


    
}

var h1s = document.querySelector("h1")
function changeColor(){
    h1s.style.color = "red"
}
function changeBack(){
    h1s.style.color = "whitesmoke"
}