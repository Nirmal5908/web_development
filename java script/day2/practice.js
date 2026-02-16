//
let color="red";
if(color==="red"){
    console.log("stop");
}
if(color==="green"){
    console.log("u can go");
}

if(color==="yellow"){
    console.log("ready to go");
}
//
let size='XL';

if(size==='XL'){
    console.log("price is Rs250");
}
else if(size==='L'){
    console.log(" price is Rs.200 ");
}
else if(size==='M'){
    console.log("price is Rs100");
}
else{
    console.log("price is Rs50");
}
//
let str="apple";
let l=str.length;
if(str[0]==='a' && l>3){
    console.log("good string");
}
else{
    console.log("not a good string");
}
//
let num=12;
if((num%3===0) && ( (num+1==15) || (num-1==11) ) ){
    console.log("safe");
} 
else{
    console.log("unsafe");
}
//
let day=5;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 1:
        console.log("monday");
        break;
        case 2:
        console.log("tuesday");
        break;
        case 3:
        console.log("wednesday");
        break;
        case 4:
        console.log("thrusday");
        break;
        case 5:
        console.log("friday");
        break;
        case 6:
        console.log("saturday");
        break;
        case 7:
        console.log("sunday");
        break;
        default:
        console.log("invalid");
        
}


