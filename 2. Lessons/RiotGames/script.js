console.log("hey you did it congrats!!!")

function greeter(name="Human Person"){

    console.log("welcome " + name);
}

function changeElement(){
    var elem = document.querySelector("#news-tag");
    console.log(elem);
    elem.innerHTML = "BANANAS";
    
}
