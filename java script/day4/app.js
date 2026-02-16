for(let i=1;i<=5;i++){
    console.log(i);
}
//backward
for(let i=5;i>=1;i--){
    console.log(i);
}
//console.log(i);  //will give error

//odd numbers
for(let i=1; i<=15; i=i+2) {
    console.log(i);
}
//even no.
for(let i=2; i<=20; i=i+2) {
    console.log(i);
}

//tables
let n = prompt("enter a no.");
for(let i=1;i<=10;i++){
    t=i*n;
    console.log(t);
}
//nested loop
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}
//while loop
let i=1;
while (i<=5){
        console.log(i);
         i++;
    }

// nested loops with nested arrays 
let heroes=[["ironman","spiderman","superman"],["thor","wonder-woman","flash"]];   
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
    for(j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

let student=[["nirmal",88],["subhash",90],["deepak",85]];
for(let i=0;i<student.length;i++){
    console.log(`info of student ${i}`);
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}

let fruits=["mango","applae","banana","orange","litchi"];

for(fruit of fruits) {
    console.log(fruit);
}

for(char of "apnacollege"){
    console.log(char);
}

// let heroes=[["ironman","spiderman","superman"],["thor","wonder-woman","flash"]];   
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}


