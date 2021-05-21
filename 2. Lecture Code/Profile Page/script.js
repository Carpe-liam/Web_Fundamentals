console.log("hello World");

for(var i = 0; i<10; i++){
    console.log(i)
}

function signOutMsg(){
    alert('Are you super duper sure you want to leave?????');
}

function chargeCard(){
    // getting an element from the html
    var myElement = document.getElementById('pay-the-man');
    // console . log the element
    console.log(myElement);
    myElement.style.display = "none";
}