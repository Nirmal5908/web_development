// forEach

let arr = [1,2,3,4,5];
let print = function(el){
    console.log(el);
};

arr.forEach(print);

//or
arr.forEach(function (el){
    console.log(el);
});

//default values

function sum(a,b=2){
    return a+b;
}
console.log(sum(7));
//values assign in parameter sequentially

//spread

//spread with object literals
const data = {
    email: "ironman@gmail.com",
    pass: "abcd",
};

let copydata = {...data, id : 123};
console.log(copydata);

//rest

function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us:",args[i]);
    }
}
sum(1,2,3,4);

function min(a,b,c,d){
    console.log(arguments);
}
min(1,2,3,4); 

//destructring
let names = ["tony","bruce","steve","peter"];
let [winner,runnerup,secondrunnerup] = names;
console.log(winner);

//destructuring on objects
const students = {
    name: "karan",
    class: 9,
    age: 14,
    subjects: ["hindi","english","maths","science","sst"],
    username: "karan123",
    password: 1234,
};
const { username: user, password: pass} = students;
console.log(user);//variable name of username