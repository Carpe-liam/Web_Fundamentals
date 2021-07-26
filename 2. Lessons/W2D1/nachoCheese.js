var chips = "blue corn tortilla";
var cheese = "nacho cheese";
var meat = "steak";
var topping1 = "sour cream";
var topping2 = "jalapenos";
var topping3 = "diced tomatos";
var topping4 = "diced onions";
var topping5 = "salsa";
var topping6 = "guac";

// the JS Objects 
// keyword var and a name
var vincentNachos = {
    "chips" : "tortilla chips",
    "cheese" : "cheedar",
    "meat" : "bacon",
    "toppings": ["sour cream", "salsa", "beans", "guac"],
    "nachoInfo" : function(){
        console.log("nunnya")
        return this;
    },
    "foodInfo" : function(){
        console.log("chips: " + this.chips);
        console.log("cheese: " + this.cheese);
        console.log("meat: " + this.meat);
        for(var i = 0; i<this.toppings.length; i++){
            console.log("topping " + (i+1) + ": " + this.toppings[i])
        }
    }
}

// vincentNachos.nachoInfo().foodInfo()

// vincentNachos.chips = "spicy doritos";

// vincentNachos.foodInfo();

var today = new Date()

// console.log(today)

// setTimeout(vincentNachos.nachoInfo, 3000)

setInterval(()=>{
    today = new Date();
    console.log(today);
}, 1)
