var tortilla = "flour";
var cheese = "monterey jack";
var protein = "bacon";
var eggs = "scrambled";
var starch = "french fries";
var toppings = ""
var total = 6;

var tortilla1 = "flour";
var cheese1 = "monterey jack";
var protein1 = "bacon";
var eggs1 = "scrambled";
var starch1 = "french fries";
var toppings1 = ""
var total1 = 6;

var nathansBurrito = {
    "tortilla" : "flour",
    "cheese" : "monterey jack",
    "protein" : "bacon",
    "eggs" : "scrambled",
    "starch" : "french fries",
    "toppings" : "",
    "total" : 6,
    "burritoInfo" : function(){
        var info = "the tortilla type is: " + this.tortilla + "\n"
        info += "the cheese type is: " + this.cheese + "\n"
        info += " the protien type is: " + this.protein + "\n"

        console.log(info)
    }  
}


var jonathansBurrito = { 
    "name" : "Jon's burrito",
    "tortilla" : "corn", 
    "cheese" : "jalepeno jack", 
    "protein" : "tri tip",
    "eggs" : "over easy",
    "starch" : "hash browns",
    "toppings" : "queso",
    "total" : 3,
    "burritoInfo" : function(){
        var info = "for " + this.name + "\n";
        info += "the tortilla type is: " + this.tortilla + "\n"
        info += "the cheese type is: " + this.cheese + "\n"
        info += " the protien type is: " + this.protein + "\n"

        console.log(info)
    }   
}


console.log(nathansBurrito.cheese, jonathansBurrito.cheese)
jonathansBurrito.burritoInfo()
nathansBurrito.burritoInfo()

