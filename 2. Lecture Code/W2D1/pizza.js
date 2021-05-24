// var crust = "traditional";
// var sauce = "red";
// var cheese = "mozzarella";
// var topping1 = "pepperoni";
// var topping2 = "bacon";

var kylesPizza = {
    "crust": "cheese stuffed crust",
    "sauce": "bbq",
    "cheese": "sharp ch33dd3r",
    "toppings": ["whole pineapple", "apples"],
    "slices": 27,
    "pizzaInfo": function(){
        console.log("Crust: " + this.crust);
        console.log("Sauce: " + this.sauce);
        console.log("Cheese: " + this.cheese);
        console.log("Toppings: " + this.toppings);

    }
}
var haydensPizza1 = {
    "crust": "stuffed crust",
    "sauce": "red",
    "cheese": "mozza",
    "1":"fun",
    "toppings": ["chicken", "gravy"],
    "slices": 1,
    "pizzaInfo": function(){
        console.log("Crust: " + this.crust);
        console.log("Sauce: " + this.sauce);
        console.log("Cheese: " + this.cheese);
        console.log("Toppings: " + this.toppings);

    }
}

kylesPizza.toppings[0] = "bananas"
kylesPizza.pizzaInfo()
haydensPizza1.pizzaInfo()

for(let key in haydensPizza1){
    console.log(key)
}

function getDate(){

    var today = new Date()
    console.log(today)
}

setTimeout(haydensPizza1.pizzaInfo, 5000)

setInterval(()=>{
    getDate();
    haydensPizza1.pizzaInfo();
}, 1000)


haydensPizza1.pizzaInfo()