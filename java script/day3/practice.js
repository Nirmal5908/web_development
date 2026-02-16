//1
let msg="help!";
console.log(msg.trim().toUpperCase());

//2
let Name="apnacollege";
console.log(Name.slice(4,9));
console.log(Name.indexOf("na"));
console.log(Name.replace("apna","our"));

//3
let name=Name.slice(4);
console.log(name);
name2=name.replace("l","t");
console.log(name2.replace("l","t"))

//4
let months=["january","july","march","august"];
months.splice(0,2,"july","june");
console.log(months);

//5
let lang=["c","c++","html","javascript","python","java","sql"];
console.log(lang.reverse());
console.log(lang.indexOf("javascript"));
//or lang.reverse().lang.indexOf("javascript")  in single line

//create a nested array to show the following tic-tac-toe game state
let arr=[['X',null,'O'],[null,'X',null],['O',null,'X']]
console.log(arr);
arr[0][1]='O';
console.log(arr);
console.log(lang.includes("c"));