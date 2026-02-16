const student ={
    name: "nirmal",
    age: 21,
    eng: 95,
    math: 93,
    phy: 97,
    getavg() {
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks =${avg}`);
    }
}
student.getavg();

// try and catch
// console.log(a);  a is not defined,so throw an error

console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch{
    console.log("caught an error")
}
console.log("hello2");
console.log("hello2");

//arrow function

const sum = (a,b) => {
    console.log(a+b);
};
sum(3,4);

const cube =(n) => {
    return n*n*n;
};
let x = cube(5);
console.log(x);

const power = (a,b) => {
    return a**b;
};

let y = power(2,3);
console.log(y);

const mul = (a,b) => a*b;

// setTimeout
console.log("hi there!");

setTimeout( () => {
    console.log("hello world!");
},4000);

console.log("welcome to");
setTimeout();

//setInterval
let id = setInterval(() => {
    console.log("hello world!");
},2000);

let id2 = setInterval(() => {
    console.log("hii there!");
},2000);
console.log(id);

clearInterval(id);


