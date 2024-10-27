// JS is a high-level,interpreted language -- primarily used to create dynamic, interactive effects within web browsers.
// JavaScript is versatile, and through Node.js, it has expanded to server-side programming as well.

// Creation -- 1995 -- JS was created by Bredan Eich at Netscape communications.
    // It was initially named as -- "Mocha" -- then, "LiveScript" -- and finally "JavaScript".
    // ECMAScript:
    // Standardization -- (1996-1997) -- NetScape submitted JS to ECMA Internatinal for standardization to create a universal standard, leading to "ECMAScript".
        // The 1st version, ECMAScript 1 (ESA) -- was standardized in 1997.
        // 1999 -- ES3 -- added features like: Regular Expressions, try/catch, and better string handling.
        // 2009 -- ES5 -- JSON support, 'strict mode', array methods and object properties.
        // 2015 -- ES6 -- 'let', 'const' keywords, classes, modules, arrow functions, template literals and promises.
        // LATEST/MODERN JS -- async/await(ES2017)
                            // -- optional chaining(ES2020)
                            // -- Logical Assignment Operators (ES2021).
                            // Powered by frameworks and libraries like: React, Angular and Node.js
                            
// 'var' vs. 'let' in JS:
    // -- Earlier 'var' was used, but after ES6 -- 'let' and 'const' introduced.
        // -- so better to avoid use of 'var' -- It may cause 'bug' issues.
    // 'const' -- use dto declare CONSTANTS -- those identifiers whose value doesn't change through out JS program.
    // 'let' -- To declare BLOCK SCOPED VARIABLE.
    // 'var' -- GLOBALLY SCOPED.

    // 'var' -- can be UPDTAED and RE-DECLARED within its scope.
    // 'let' -- can be UPDATED but NOT RE-DECLARED.
    // 'const' -- can neither be UPDATED nor RE-DECLARED  --- 'const' declarations must be initialized.  --- const w: any.

console.log("Hello World!")

let name = 100
console.log(name)

name = "Shayan Kumar"
console.log(name)

var a = 10
// Create a block:
{
    let a = "Shayan"
    console.log(a)
}
console.log(a) // check the value of 'a' : It will take the GLOBAL SCOPED!!

var a = 10
let b = 'Shayan'
var c = null
var d = undefined

// ---------------- DATATYPES in JS -----------------
// #PRIMITIVE DTYPES -> 7.  [Built-in dtypes in JS] -- [[NN] [SS] [BB] [U]] --- [[NULL NUMBER] [SYMBOL STRING] [BOOLEAN BIGINT] [UNDEFINED]].
// OBJECTS --- NON-PREMITIVE DTYPE.

let _a = null;  // NULL
let _b = 345;  // NUMBER
let _c = true; // can also be 'false'   -- BOOLEAN
let _d = BigInt("567") // BIGINT
let _e = "Shayan" // STRING
let _f = Symbol("I am a nice symbol") // SYMBOL
let _g = undefined //UNDEFINED  -- No value is given to this variable   --- let _g; <-- It will also considered as undefined
let _h;  // UNDEFINED
console.log(_a, _b, _c, _d, _e, _f, _g, _h)  // OUTPUT: null 345 true 567n Shayan Symbol(I am a nice symbol) undefined undefined

// CHECK TYPE OF VARIABLES:
console.log(typeof(_a))  // OUTPUT: object
console.log(typeof(_b))     // number
console.log(typeof(_c))     // boolean
console.log(typeof(_d))     // bigint
console.log(typeof(_e))     //string
console.log(typeof(_f))     // symbol
console.log(typeof(_g))     // undefined
console.log(typeof(_h))     // undefined.

// ------ OBJECT in JS ------
const item = {
    "Shayan" : true,
    "Nishi" : false,
    "Raj" : 29,
    "Praksh" : undefined
}       // In Python -- It is dictionary.   ---- but in JS : Object.
console.log(item["Praksh"], item["Nishi"], item["Raj"], item["Shayan"]) // OUTPUT: undefined false 29 true
console.log(typeof(item))  // OUTPUT: object
console.log(item)       // OUTPUT : { Shayan: true, Nishi: false, Raj: 29, Praksh: undefined }

// ------------------------------- PRACTICE SOME PROBLEMS ----------------------------------

// Q1. Create a variable of type string and try to add a number to it.
let a1 = "Shayan"
let b1 = 10
console.log(a1 + b1)

// Q2. Use typeof operator to find the dtype of the string in last question.
console.log(typeof (a1 + b1))

// Q3. Create a const object in JS. Can you change it to hold a number later?
const a2 = {
    "name": "Shayan",
    "section": 1,
    "isPrincipal": false
}
// a = 890;  // TypeError: Assignment to constant variable.

a2["name"] = "SK"
console.log(a2)  // OUTPUT : { name: 'SK', section: 1, isPrincipal: false }

// Q4. Try to add a new key to the const object in Problem (Q3). Were you able to add it?
a2["ss"] = "564"
console.log(a2) // OUTPUT : { name: 'SK', section: 1, isPrincipal: false, ss: '564' }

// Q5. write a JS program to create a word-meaning dictionary of 5 words.
const dict = {
    "appreciate": "recognize the full worth of.",
    "ataraxia": "a state of freedom from emotional disturbance and anxiety.",
    "yakka" : "work, especially hard work."
}
console.log(dict.yakka, dict["yakka"]) // OUTPUT : work, especially hard work. work, especially hard work.

////////////////////////////////////////////////////////////////////////////////////////////////////////////