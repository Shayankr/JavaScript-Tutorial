// ------------------------------------- LOOPS AND FUNCTIONS ---------------------------------------
const prompt = require('prompt-sync')()

// // Types of loops in JS:
// 1. "for" loop
// 2. "for in" loop
// 3. "for of" loop
// 4. "while" loop
// 5. "do-while" loop.

// ---------------------------- FOR LOOPs ------------------------------
/* 1. FOR LOOP:
for (initilaization; conditions; increment/decrement){
    // write code here
}
*/
for (let i = 0; i < 5; i++){
    console.log(i)
}

// Write a program to add first 100 Natural numbers:
let sum = 0;
let n = prompt("Enter the value of n: ")
for (let i = 0; i < n; i ++){
    sum += (i+1)
}
console.log("Sum of first " + n + "natural numbers is "+ sum)


// 2. "for-in" LOOP:  -- It also works for "Array".
/* Syntax:
for (key in object){
    Code to be executed ...
}
*/
let obj = {
    "Shayan": 90,
    "Shyam" : 45,
    "Ram"   : 16,
    "Sakshi": 23
}
for (let a in obj){
    console.log("Marks of ", a, " is ", obj[a])
}

// 3. "for-of" LOOP:
/* SYNAX:
for (variable of iterable){
    // code   --- Iterate Data Structure like Arrays, Strings.
}
*/
// Iterable -- String, Array.
for (let a of "SHAYAN"){
    console.log(a)
}


// ------------------- "WHILE"  & "DO-WHILE" LOOP ----------------------
/*
while (condition){
    // CODE
}
*/
let n_ = prompt("Enter the value of n: ");
n_ = Number.parseInt(n_)

let i = 0;
while ( i < n_){
    console.log(i);
    i ++;
}

do{
    console.log(i);
    i ++;
}while (i < 2*n_);

///////////////////////////////////////////
// ----------------------------------------------- FUNCTIONs ------------------------------------------------

/* Syntax:
function <func_name>(<param1>, <param2>, <param3>, ...){
    // CODE
}
*/
// Example-1:
function onePlusAvg(x, y){
    return Math.round(1 + (x + y)/2);
}

let a = 1;
let b = 2;
let c = 3;
console.log("One Plus Average of a and b is ", onePlusAvg(a, b));

// Another way to create and use the function: ----- ARROW FUNCTION ------
const sum_= () => {
    return p + q
}

const hello = () => {
    console.log("Hello World!")
}
hello();

const hey = () => {
    console.log("Hi there!!")
    return "HEY!!"
}
let v = hey();
console.log(v);

///// ----------------------------------------------------------------------

// Q1. Write a program to print the marks of a student in an object using for loop.
let marks = {
    "Shayan" : 98,
    "Bishwajit" : 97,
    "Pradyumn" : 96,
    "Raj" : 90
}
for (let i = 0; i < Object.keys(marks).length; i ++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

// Q2. Write the program in Q1 using for-in loop:
for (let key in marks){
    console.log("The marks of "+ key + " is " + marks[key]);
}

// Q3. Write a program to print "try again" until the user enters the correct number.
let corr_num = 4;
let x;
while ( x != corr_num){
    console.log("Try Again ...")
    x = prompt("Enter a Number :  ")
}
console.log("You have entered a correct number.")

// Q4. Write a program to find mean of 5 numbers:
// Soln:
const mean = (a, b, c, d) =>{
    return (a+b+c+d)/4
}
console.log(mean(1, 2, 1, 0))

// ....................................................................................................//