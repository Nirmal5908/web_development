console.log("hello world!");
console.log("apna college.");
let a=10;
let b=5;
console.log("sum is:",a+b);
let output=`The sum is: ${a+b} rupees`
console.log(output)
//arithmatic operator
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);
console.log(a**b);
//unary operator
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
//assignment operator
b=a
console.log(b);
let age=18;
console.log(age<18);
console.log(age<=18);
console.log(age>18);
console.log(age>=18);
console.log(age==18);
console.log(age!=18);
//logical operators
let marks=90;
if (marks>=33 && marks>=80){
    console.log("pass");
    console.log("A+");
}
//switch statement
let color="red";
switch(color) {
        case "red":
        console.log("stop");
        break;
        case "yellow":
        console.log("slow sown");
        break;
        case "green":
        console.log("go");
        break;
        default:
        console.log("light is broken");
        
}
//alert & prompt
// alert("this is a error!");
console.log("this is a simple log");
console.error("this is a error msg");
console.warn("this is a warning msg!");
let firstname=prompt("enter ur firstname:");
let lastname=prompt("enter ur lastname:");
console.log("welcome",firstname,lastname);
let Name="welcome"+" " +firstname+" "+lastname;
alert(Name) 
