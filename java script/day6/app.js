function hello(){
    console.log("hello!");
}
hello();

function printPoem() {
    console.log("twinkle twinkle, little star \n How i wonder, what u are");
}

printPoem();

//create a function to roll a dice & always display the value of the dice.
function rollDice() {
 let random = Math.floor(Math.random()*6)+1;
 console.log(random);
}

rollDice();
rollDice();
rollDice();
rollDice();

// average

function calAvg(a,b,c) {
    let avg = (a+b+c)/3 ;
    console.log(avg);
}

calAvg(2,3,4);

//table
function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
printTable(5);

//return statement
function sum(a,b) {
    return a+b;
}
let s=sum(sum(1,2),3);
console.log(s);


function isAdult(age) {
    if(age >=18){
        return "adult";
    }
    else {
        return "not adult"
    }
}
console.log(isAdult(20));
 

//scope
let num = 54;  //global scope
function calSum(a,b){
    let sum=a+b;  //function scope
    console.log(sum);
}
calSum(1,2);

// block scope = {}

//lexical scope
function outerFunc() {
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}

//high order function
function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

multipleGreet(greet,5);

//oddEvenTest

function oddEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
    }
    return odd;
        }
        
    
else if(request == "even"){
    let even = function(n){
        console.log(n%2 == 0);
    }
    return even;
} else {
    console.log("wrong request!");
    }
}

//methods applied on objects

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
console.log(calculator.add(3,4));
console.log(calculator.sub(6,4));
console.log(calculator.mul(3,4));



const calculator2 = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(calculator2.add(3,4));
console.log(calculator2.sub(6,4));
console.log(calculator2.mul(3,4));











 