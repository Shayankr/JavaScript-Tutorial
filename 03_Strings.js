// ---------------- String : Array of Characters ------------------

// Strings can be created using the following syntax:
    // let name = "Shayan"  --> name.length
    // let name = 'shayan'  ---- Single quote or Double quote.

// ----- TEMPLATE LITERALS --------  USES BACKTICS INSTEAD OF QUOTES TO DEFINE A STRING.
// let name = `Shayan`
    // with template literals -- It is possible to use both single and double quotes inside the string.
    // let name = ` My name is "Shayan" 'kr'`
let name_ = `My Name Is "Shayan" 'Kr'`
console.log(name_)

// We can insert variables directly in template literal. This is called --- "STRING INTERPOLATION".
let  a = `This is : ${name_}`
console.log(a)

console.log(`Length of name_ string is : ${name_.length}`)

console.log(`1st character of name_ or at 0th index is : ${name_[0]}`)

// ------------- Escape Sequence Characters -----------------
let fruit = 'Bana\'na'
console.log(fruit)

// 1. \n : New Line
// 2. \t : Tab
// 3. \r : Carriage Return.



// =========================================== STRING PROPERTIES AND METHODS ==============================================
let _name = "Shayan"
console.log(_name.length)

_name[0] = "M" // This is NOT possible ---- String is IMMUTABLE.
console.log(_name)

console.log(_name.toLowerCase())
console.log(_name.toUpperCase())

console.log(_name.slice(2, 4)) // 2nd index included , 4th index excluded!  -- "ay"
console.log(_name.slice(2))   // from 2nd index  -- "ayan"

console.log(_name.replace("yan", "yuhi"))   // REPLACE : "Shayuhi"

console.log(_name.split("a"))  // [ 'Sh', 'y', 'n' ]

console.log(_name.concat(" Kumar"))
console.log(`${_name}`.concat(" Kumar"))

console.log(`${_name}`.concat("   Kumar   ".trim()))   // ShayanKumar
console.log(`${_name}`.concat("   Kumar   ").trim())    // Shayan   Kumar

// Chcek all the available methods and properties:
// console.dir("Shayan");
console.log(Object.getOwnPropertyNames(String.prototype))
// OUTPUT:
/*[
    'length',            'constructor', 'anchor',
    'at',                'big',         'blink',
    'bold',              'charAt',      'charCodeAt',
    'codePointAt',       'concat',      'endsWith',
    'fontcolor',         'fontsize',    'fixed',
    'includes',          'indexOf',     'isWellFormed',
    'italics',           'lastIndexOf', 'link',
    'localeCompare',     'match',       'matchAll',
    'normalize',         'padEnd',      'padStart',
    'repeat',            'replace',     'replaceAll',
    'search',            'slice',       'small',
    'split',             'strike',      'sub',
    'substr',            'substring',   'sup',
    'startsWith',        'toString',    'toWellFormed',
    'trim',              'trimStart',   'trimLeft',
    'trimEnd',           'trimRight',   'toLocaleLowerCase',
    'toLocaleUpperCase', 'toLowerCase', 'toUpperCase',
    'valueOf'
  ]*/


// Q. Explore the includes, stratswith and endswith function of a string.
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`)

// ================================================================================================================