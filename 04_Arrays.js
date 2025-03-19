// ========================================= ARRAYS ========================================

// Arrays are variable which can hold more than one value.
// const fruits = ["Mango", "Banana", "Grave", "Watermelon", "Lichi"]
// const mix = [1, 10.9, "Shayan", true]

let mix = [1, 10.9, "Shayan", true]
console.log(`'mix' array is : ${mix}`)
console.log(`Length of 'mix' array is: ${mix.length}`)
console.log(`1st Element of 'mix' array is : ${mix[0]}`)

mix[0] = 100  // Arrays are Mutable.
console.log(`After chnaging the value at 1st position to 100, 0th indexed value is : ${mix[0]}`)

// Print all methods and properties of 'Array':
console.log(Object.getOwnPropertyNames(Array.prototype))
// OUTPUT:
/*[
    'length',        'constructor',    'at',
    'concat',        'copyWithin',     'fill',
    'find',          'findIndex',      'findLast',
    'findLastIndex', 'lastIndexOf',    'pop',
    'push',          'reverse',        'shift',
    'unshift',       'slice',          'sort',
    'splice',        'includes',       'indexOf',
    'join',          'keys',           'entries',
    'values',        'forEach',        'filter',
    'flat',          'flatMap',        'map',
    'every',         'some',           'reduce',
    'reduceRight',   'toLocaleString', 'toString',
    'toReversed',    'toSorted',       'toSpliced',
    'with'
  ]
*/


// legth of mix is : 4
mix[10] = 20
console.log(mix) // [ 100, 10.9, 'Shayan', true, <6 empty items>, 20 ]

// Check type of array:
console.log(typeof(mix))  // object

// Q. Print all elements of an array using for-loop.
for (let i = 0; i<mix.length; i++){
    console.log(`The value at ${i} index of ${mix} array is : ${mix[i]}`)
}
// The value at 0 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : 100
// The value at 1 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : 10.9
// The value at 2 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : Shayan
// The value at 3 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : true
// The value at 4 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : undefined
// The value at 5 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : undefined
// The value at 6 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : undefined
// The value at 7 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : undefined
// The value at 8 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : undefined
// The value at 9 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : undefined
// The value at 10 index of 100,10.9,Shayan,true,,,,,,,20 arrya is : 20

let mix = [1, 10.9, "Shayan", true]   // -- SyntaxError: Identifier 'mix' has already been declared -- so Run code from this line again.
for (let ind in mix){
    console.log(ind)  // Print each index number not the value.
    console.log(`The value at ${ind} index of ${mix} array is : ${mix[ind]}`);

}

for (let val of mix){
    console.log(val);   // Print each value one by one in new line.
}

// Convert Array --> String
let b = mix.toString()
console.log(`${b}`)
console.log(typeof(b)) // string.

let c = mix.join("_")
console.log(c, ": Type is : ", typeof(c)) // output: 1_10.9_Shayan_true : Type is :  string

// Remove last elements from array ----------- change the same array, Do NOT return a new array:
mix.pop() // output: true
console.log(mix) // output: [ 1, 10.9, 'Shayan' ]

let x = mix.pop()  // output: Shayan
console.log(`Popped element is ${x} and final array is : ${mix}`)   // output: Popped element is Shayan and final array is : 1,10.9


// PUSH : Adds a new element at the end of the array:
let d = mix.push("Shayan Kumar")  // returns the new array length.
console.log(d)      // output: 3
console.log(mix)  // output: [ 1, 10.9, 'Shayan Kumar' ]

// Explore More:
// 1. PUSH -- ADDS A NEW ELEMENT AT THE END OF THE ARRAY.
// 2. POP -- REMOVES LAST ELEMENT, RETURNS REMOVED ELEMENT.
// 3. SHIFT -- REMOVES FIRST ELEMNT AND RETURNS IT.
// 4. UNSHIFT -- ADD ELEMENTS TO THE BEGINNING, RETURNS NEW ARRAY LENGTH.
// 5. DELETE -- DELETE ARRAY ELEMENTS.
// 6. CONCAT -- JOIN ARRAYS TO THE GIVEN ARRAY.
// 7. SORT
// 8. SLICE  -- SLICE OUT A PIECE FROM AN ARRAY -- IT CREATES A NEW ARRAY.
// 9. REVERSE  -- REVERSE THE ELEMENTS IN THE SOURCE ARRAY.
// 10. SPLICE -- SPLICE CAN BE USED TO ADD NEW ITEMS TO AN ARRAY.  -- arr.splice(ind_to_add, n_ele_2_add, <elemenst_to_be_added_with_comma>)
                // -- It deletes previous existed elements on those indexes.


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num.length);  // 9
delete num[0]  //
console.log(num.length)  // 9
console.log(num)  // [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]


let num2 = [10, 11, 12, 13, 14, 15, 16, 17, 18]

let new_array = num.concat(num2)  // Returns a new array
console.log(new_array)
console.log(num, num2)

console.log(num.concat(num, num2, new_array));

// ---- SORTING ----
let a = [2, 20, 3, 18]
let a2 = a.sort()  // It sorts alphabetically.  -- By assuming string.   -- It sorts the actual array.
console.log(a, a2) 

let compare = (a, b) =>{
    return a - b;
}
a.sort(compare)
console.log(a)

//
// =============================== LOOP : FOR LOOP, FOR EACH LOOP, FOR IN LOOP, FOR OF LOOP, ARRAY FROM ===================================
 let nums_ = [1, 5, 78, 10, 28, 55]

 for (let i = 0; i<nums_.length; i++){
    console.log(nums_[i])
 }

 nums_.forEach((element) => {
    console.log(element * element)
 });

// Array.from("Shayan")
let name_ = "Shayan";
let arr = Array.from(name_)
console.log(arr)  // [ 'S', 'h', 'a', 'y', 'a', 'n' ]

// for ... of
for (let val of nums_){
    console.log(val)
}

// for ... in
for (let key in nums_){
    console.log(key);
}

// ============================================================================================================================ //