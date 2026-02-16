let student={
    name: "nirmal",
    age: 21,
    marks: 80

};
const item = {
    price: 100.99,
    discount: 50,
    color: ["red","green"]
};

// create an object literal for the properties of thread/twitter post which includes:-
// * username
// * Content
// * likes
// *Report
// *tags

const post = {
    username: "@nirmalk",
    content: "this is my #firstpost",
    likes: 150,
    reports: 5,
    tags: ["gecwc","btech"]
};

console.log(post["likes"]);
console.log(post.username);

const student1 = {
    name: "nirmal",
    age: 21,
    marks: 80,
    city: "delhi"
};
student1.city = "mumbai"
console.log(student1.city);
 student1.gender= "male";  //add another property
console.log(student1);
delete student1.age
console.log(student1);

//object of objects
const classinfo = {
    aman: {
        grade: "a+",
        city: "delhi"
    },
    nirmal:{
         grade: "a",
        city: "pune"
    },
    karan:{
         grade: "o",
        city: "mumbai"
    }

};
console.log(classinfo);
console.log(classinfo.aman);
console.log(classinfo.nirmal.city);
console.log(classinfo.karan.grade); //dot operator chaining

//array of objects
const classinfo1 = [
    { 
        name: "aman",
        grade: "a+",
        city: "delhi"},
    {   
        name: "nirmal",
        grade: "a",
        city: "pune"
    },
    {
        name: "karan",
         grade: "o",
        city: "mumbai"
    }
    
];
console.log(classinfo1);
console.log(classinfo1[0]);  //indexing
console.log(classinfo1[1].city);
console.log(classinfo1[2].grade);
classinfo1[1].gender="male";
console.log(classinfo1[1]);

//maths objects
//generate a number between 1 to 100.
let random= Math.floor(Math.random()*100)+1;
console.log(random);

//generate a number between 1 to 5.
let random1= Math.floor(Math.random()*5)+1;
console.log(random1);

//generate a number between 21 to 25.
let random2= Math.floor(Math.random()*5)+21;
console.log(random2);