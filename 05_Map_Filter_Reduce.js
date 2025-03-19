// ================================================= ARRAY : MAP, FILTER, REDUCE ========================================================
// ==============================================  [ HIGHER ORDER ARRAY METHODS ] =======================================================

// IN JS: Map, Filter, Reduce -- are methods on the "Array" object, allowing functional style data manipulation on arrays.
    // They enable you to -- transform, filter and accumulate values in a clean and efficient way.

// 1. map():
    // Creates a new array -- populated with the results of calling a provided functionon every element in the original array.
    // Syntax:
    // const newArray = array.map(callback(element, index, array))

const pricesInUSD = [5, 10, 20, 50];
const exchangeRate = 0.85;

// const pricesInEUR = pricesInUSD.map(price => price * exchangeRate);
// const pricesInEUR = pricesInUSD.map(price => { return price * exchangeRate});
// const pricesInEUR = pricesInUSD.map((price) => {return price * exchangeRate});
const pricesInEUR = pricesInUSD.map((price) => {console.log(price); return price * exchangeRate});  // like 'for .. each' function of ARRAY.
console.log(pricesInEUR);
const pricesInEUR_ = pricesInUSD.map((price, index, array) => {console.log(price, index, array); return price * exchangeRate});
const pricesInEUR__ = pricesInUSD.map((price, index) => {console.log(price, index); return price * exchangeRate});
const pricesInEUR___ = pricesInUSD.map((price, index, array) => {console.log(price); return price * exchangeRate});

// for ... each loop:
pricesInUSD.forEach((element) => {
    console.log(element * exchangeRate)
 });



// 2. filter()
    // Creates a new array -- with all elements that pass the test implemented by the provided function.
    // Syntax:
    // const newArray = array.filter(callback(element, index, array));

// Exmaple : Filter out adult ages from an array:
const ages = [12, 17, 22, 8, 33, 19];
const adults = ages.filter(age => age >= 18);
console.log(adults)



// 3. reduce():
    // Executes a reducer function on each element of the array (from left to right) -- resulting in a single output value.
    // It's commonly used for aggregating data.
    //Syntax:
    // const result = array.reduce(callback(accumulator, element, index, array), initialValue);

// Example-1: Sum up all the numbers in an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.0];
// const sum = numbers.reduce((argument_1, argument_2) => argument_1 + argument_2, 0); // 0 is initialize summation value.
const sum = numbers.reduce((acc, num) => acc + num, 0); // 0 is initialize summation value.
console.log(sum)

// Example-2: Calculate the average of an array of numbers:
const avg = numbers.reduce((acc, num, index, array) => {
    acc += num;
    if (index === array.length - 1) {
        return acc / array.length;
    } else {
        return acc;
    }
}, 0);
console.log(avg);

// Example-3: Find Sum using 'Reduce' concept by passing a Custom add function:
const add = (accumulator, currentValue) => accumulator + currentValue;
// Using reduce with the custom add function
const total = numbers.reduce(add, 0);
console.log(total);

// Example-4: Find the maximum number in an array:
const max = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(max);

// Example-5: Find the minimum number in an array:
const min = numbers.reduce((min, num) => (num < min ? num : min), numbers[0]);
console.log(min);

// ------------------------- COMBINED EXAMPLE: -------------------------
// COMBINED RESULTS:
const numbers_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.0];

// Step-1: Double each number:
const doubled = numbers_.map(num => num * 2); // output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Step-2: Filter out numbers greater than 10:
const filtered = doubled.filter(num => num <= 10); // output: [2, 4, 6, 8, 10]

// Step-3: Sum the remaining numbers:
const sum_ = filtered.reduce((acc, num) => acc + num, 0); // output: 30

console.log(sum_); // output: 30

/////////////////////////////////////////////////////////////////////////////////////////////////////////