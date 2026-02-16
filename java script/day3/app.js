let msg="   hello   ";
let newmsg=msg.trim();
console.log(newmsg);

let str="Random string";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1=("i love coding");
console.log(str1.indexOf("love"));
console.log(str1.indexOf("j"));
console.log(str1.indexOf("o"));

let msg2="   hello  ";
let Msg2=msg2.trim().toUpperCase();
console.log(Msg2);

//slice
console.log(str.slice(1));
console.log(str.slice(1,6));
console.log(str.slice(-1,-6)); 

//replace
console.log(str1.replace("love","do"));
console.log(str1.replace("i","we"));

//repeat
console.log(str.repeat(3)); 

//array
let students=["nirmal","subhash","aman"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(typeof(students));

let info=["nirmal",21,88.8];
let empArr=[];
console.log(info[0]);
console.log(info[0][0]);  //accessing single character
console.log(info[0][2]);

//arrays are mutable
let fruits=["mango","apple","litchi"];
fruits[0]="banana";
console.log(fruits);
fruits[10]="papaya";
console.log(fruits);

let cars=["audi","bmw","maruti","xuv"];
cars.push("toyota");
console.log(cars);
cars.push("ferrari");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("ferrari");
console.log(cars);
cars.shift();
console.log(cars);

console.log(cars.indexOf("audi"));

console.log(cars.includes("audi"));
console.log(cars.includes("suzuki"));

console.log(cars.concat(fruits));

cars.reverse();
console.log(cars);
//slice
cars.slice();
console.log(cars.slice());
console.log(cars.slice(2));
console.log(cars.slice(2,3));
console.log(cars.slice(-2));

//splice
cars.splice(3);
console.log(cars);
cars.splice(0,1);
console.log(cars);
cars.splice(0,0,"ferrari","bmw");
console.log(cars);
cars.splice(1,0,"mercedes");
console.log(cars);

cars.sort();
console.log(cars);
let char=["e","h","l","q","a"];
char.sort();
console.log(char);
let num=[23,68,95,82,5];
num.sort();
console.log(num);

//array referance
let arr=['a','b'];
let arrCopy=arr;
console.log(arrCopy);
arrCopy.push('c');
console.log(arr);

const arr1=[1,2,3];
// arr1=cars;  //not possible bcz arr1 is constant now

//nested array
let nums=[[2,4],[3,6],[4,8]];
console.log(nums);
console.log(nums[0][0]);
console.log(nums[1][1]);