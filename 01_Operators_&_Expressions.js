// -------------------------------- OPERATORS AND EXPRESSIONS IN JS --------------------------------------

// 77;
// "Shayan Kr"
// true

console.log("Operators in JS!!")

// ARITHMATIC OPERATOR
let a = 10;
let b = 20;
console.log("a + b = ", a+b)  // OUTPUT: a + b =  30
console.log("a - b = ", a-b)    // -10
console.log("a / b = ", a/b) // OUTPUT : 0.5
console.log("a * b = ", a*b)  // 200
console.log("a ** b = ", a**b) // power(a, b)
console.log("a % b = ", a%b) // remainder: 10

console.log("a++ = ", a++)    // post-increment -- value of 'a' remains same.  --> 11
console.log("a = ", a)  //10

console.log("a-- = ", a--)   // post-decrement -- value of 'a' remains same. --> 11
console.log("a = ", a)  // 10

console.log("++a = ", ++a)    // pre-increment -- value of 'a' CHANGED. --> 11
console.log("a = ", a)  // 11

console.log("--a = ", --a)    // pre-increment -- value of 'a' CHANGED.  --> 10
console.log("a = ", a)  // 10.


// // Assignment Operators: 
// 1. =
// 2. +=
// 3. -=
// 4. *=
// 5. /=
// 6. %=
// 7. **=


// // Comparison Operators:
// 1. ==
// 2. !=
// 3. ==== :Equal value and typeof
// 4. !== : NOT Equal value or NOT Equal Type
// 5. >
// 6. <
// 7. >=
// 8. <=
// 9. ? : Ternary Operator

let comp1 = 10;
let comp2 = 20;
let comp3 = "20";
console.log("Comp1 is ", comp1 , " and comp2 is ", comp2)
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)

console.log("comp2 == comp3 is ", comp2 == comp3) // TRUE
console.log("comp2 === comp3 is ", comp3 === comp2) // FALSE

console.log("comp2 != comp3 is ", comp2 != comp3) // FALSE
console.log("comp2 !== comp3 is ", comp2 !== comp3) // TRUE

console.log("comp1 > comp2 is ", comp1 > comp2) // FALSE
console.log("comp3 > comp2 is ", comp3 > comp2) // FALSE

console.log("comp1 >= comp2 is ", comp1 >= comp2) // FALSE

// // Logical Operator:
// 1. && : LOGICAL AND
// 2. || : LOGICAL OR
// 3. ! : LOGICAL NOT.
let p = 5;
let q = 6;
console.log(p > q && p == 5);  // FALSE && TRUE => FALSE.
console.log(p>q || p==5); // TRUE || TRUE => TRUE
console.log(!false) // TRUE

// BITwise Operator:

// TYPE Operator:


// Comment in JS:
// 1. //
/*
My name is Shayan Kumar.
I am learning JS.
------ THIS IS A MULTILINE COMMENT!! -----------
*/


// ----------------------------------------------- CONDITIONAL EXPRESSIONS ----------------------------------------------------
/*
1. IF
2. IF ... ELSE
3. IF ... ELSE IF
*/

/*
SWITCH-CASE STATEMENT
*/

// Try 'prompt' and 'alert' -- in web browser.

const prompt = require('prompt-sync')()

let x = prompt("Hey!! What's your age? ")
x = Number.parseInt(x) // Converting the string to a number.
console.log(typeof(x))

if (x > 0){
    alert("This is a valid age!")
}
else{
    alert("This is an invalid age!!")
}

// const prompt = require('prompt-sync')()
// let x = prompt("Hey!! What's your age? ")
if (x < 0){
    console.log("This is an Invalid age!")
}
else if(x < 9){
    console.log("You are a kid!!")
} else if(x<18 && x >= 9){
    console.log("You are going to be an Adult!!!")
}else{
    console.log("You are eligible.....")
}
console.log("Done")



// ---------------- SWITCH CASE STATEMENT --------------------

// Example - 1:
const expr = "Papayas"
switch (expr) {
    case 'Oranges':
        console.log('Oranges are cheap!')
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are ₹120 a kg.")
        break;
    default:
        console.log("Sorry, No information available!!")
}



// ----------- TERNARY OPERATOR -------------

// --------------   Condition ? expr1 : expr2 -----------------
// --------------   (marks > 60) ? "PASS" : "FAIL" ------------
let age = 12;
console.log("You can ", (age < 18 ? "not drive!" : "drive."))

/////////////////////////////////////////////////////////////////////////////