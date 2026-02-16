// sum of n number

function getSum(n) {
    let sum=0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}
console.log(getSum(10));

//create a function that return the concatenation of all string in an array
 
let str = ["hii","hello","bye","!"];

function concat(str){
    let result ="";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
     return result;
}
console.log(concat(str));

//Q1.Write a JavaScript function that returns array elements larger than a number.
let arr=[23,32,35,64,56,42,87];
function largerThan(arr, num){
    
     return arr.filter(element => element > num);
    
}
console.log(largerThan(arr,10));
//or
function filterLargerThan(arr, threshold) {
  return arr.filter(element => element > threshold);
}
console.log(filterLargerThan([10,20,30,40],20));

//Qs2. Write a JavaScript function to extract unique characters from a string. 
//Example: str = “abcdabcdefgggh” ans = “abcdefgh” 

let str1="abcdabcdefgggh";
function uniqueChar(){
    let unique ="";
    for(let char of str1){
        if(!unique.includes(char)){
            unique+=char;
        }
    }
    return unique;
}
console.log(uniqueChar(str1));

// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output. 
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America" 

let countries = ["Australia", "Germany", "United States of America"];
function longestCountry(){
    let longest="";
    for(country of countries){
        if(country.length > longest.length){
            longest = country;
        }
    }
    return longest;
}
console.log(longestCountry(countries));

// Q4. Write a JavaScript function to count the number of vowels in a String 
// argument

function vowelCount(str){
    let vowels = "AEIOUaeiou";
    let count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("nirmal kumar"));

//Qs5. Write a JavaScript function to generate a random number within a range 
//(start, end).
function generateNumber(start,end){
    return Math.floor(Math.random()*(end-start))+start;
}
console.log(generateNumber(2,4));