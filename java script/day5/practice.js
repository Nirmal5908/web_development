//Guessing game
const max = prompt("enter the max no.");
console.log(max);

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");
 
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("congrats! your guess is correct");
        break;
    }
    else if(guess < random){
        guess= prompt("hint! number is small");
    }
    else if(guess > random){
        guess= prompt("hint! number is large");
    }
    else{
        guess = prompt("plss.try again!");
    }
}


// Q1. dice numbers
const roll=Math.floor(Math.random()*6)+1;
console.log(roll);

//Q2.   Create an object representing a car that stores the following properties for the
//  car: name, model, color.
//  Print the car’s name

const car = {
    name: "BMW",
    model: "bmw",
    color: "white"
};

console.log(car.name);
console.log(car["color"]);

//Q3.  3. Create an object Person with their name, age and city.
//  Edit their city’s original value to change it to “New York”.
//  Add a new property country and set it to the United States

const person = {
    name: "messi",
    age: 35,
    city: "argentina"
};

person.city= "New-York";
person.country= "United states";
console.log(person.city);
console.log(person);