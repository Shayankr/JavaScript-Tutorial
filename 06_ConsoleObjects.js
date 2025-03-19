// ------------------------------------------- CONSOLE OBJECTS : METHODS ------------------------------------------
// 1. console.log
// 2. console.error
// 3. console.warn
// 4. console.time
// 5. console.timeEnd
// 6. console.info
// 7. console.table
// 8. console.clear
// 9. console.assert

// .. Display all console methods ....
// console.log(Object.getOwnPropertyNames(Array.prototype)) //  -- It is used for getting methods of Array.
console.log(Object.getOwnPropertyNames(console))
/*[
    'log',                 'warn',
    'error',               'dir',
    'time',                'timeEnd',
    'timeLog',             'trace',
    'assert',              'clear',
    'count',               'countReset',
    'group',               'groupEnd',
    'table',               'debug',
    'info',                'dirxml',
    'groupCollapsed',      '_stdoutErrorHandler',
    '_stderrErrorHandler', '_ignoreErrors',
    '_times',              'Console',
    'profile',             'profileEnd',
    'timeStamp',           'context',
    'createTask',          '_stdout',
    '_stderr'
  ]*/
//

console.log(console)
// OUTPUT:
/*
Object [console] {
    log: [Function: log],
    warn: [Function: warn],
    error: [Function: error],
    dir: [Function: dir],
    time: [Function: time],
    timeEnd: [Function: timeEnd],
    timeLog: [Function: timeLog],
    trace: [Function: trace],
    assert: [Function: assert],
    clear: [Function: clear],
    count: [Function: count],
    countReset: [Function: countReset],
    group: [Function: group],
    groupEnd: [Function: groupEnd],
    table: [Function: table],
    debug: [Function: debug],
    info: [Function: info],
    dirxml: [Function: dirxml],
    groupCollapsed: [Function: groupCollapsed],
    Console: [Function: Console],
    profile: [Function: profile],
    profileEnd: [Function: profileEnd],
    timeStamp: [Function: timeStamp],
    context: [Function: context],
    createTask: [Function: createTask]
  }
*/


// 1. ```console.log()```
    // Logs a message to the console, commonly used for general output and debugging.
console.log("Hello, World!")

// 2. console.error()
    // Outputs an error message, typically displayed in 'red' in the console, including an error condition.
console.error("This is an error message!")


// 3. console.warn()
    // Displays an warning message in the console, often used for deprecated features or cautioning the user.
console.warn("This is a warning!");
            // Warn the user about potential issues.


// 4. console.table():
    // Displays an array or object as a table, --- making it easier to view structured data.
const users = [
    { "name" : "Shayan", "age" : 28},
    { "name" : "Raj", "age" : 30}
];
console.table(users);
// ┌─────────┬──────────┬─────┐
// │ (index) │ name     │ age │
// ├─────────┼──────────┼─────┤
// │ 0       │ 'Shayan' │ 28  │
// │ 1       │ 'Raj'    │ 30  │
// └─────────┴──────────┴─────┘

// 5. console.info():
    // Outputs informational message. 
console.info("Informational message...");  // Log information or status messages.


// 6. console.group() and console.groupEnd():
    // Creates a collapsibke group in the console, useful for organizing output.


// 7. console.time() and console.timeEnd():
    // Measures the time taken by a block of code, useful for performance profiling:
console.time("Timer");
for (let i = 0; i < 10000; i++){} // some opertaions
console.timeEnd("Timer");
// Time Execution for performance evaluation.



// 8. console.assert():
    // Logs an error message if a specified condition is "false". 
    // Useful for testing assumptions in code.
console.assert(1 == 2, "This assertion failed!!");              // Assertion failed: This assertion failed!!



// 9. console.clear():
    // Clears the console, removing all previous output.
console.clear()



// 10. console.trace():
    // Print a stack trace from the point where it's called -- showing the path to reach that line in the code.
function testTrace(){
    console.trace("Trace Example ...")
};
testTrace();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task:
// Explore UseCases of : "alert", "confirm", "prompt".
// 11. alert():
    // Displays an alert dialog with a specified message and an OK button.
alert("This is an alert message!");

// 12. confirm():
    // Displays a dialog with a specified message, along with OK and Cancel buttons.
    // Returns true if the user clicks OK, and false otherwise.
const userConfirmed = confirm("Do you want to proceed?");
console.log("User confirmed:", userConfirmed);

// 13. prompt():
    // Displays a dialog with a specified message, a text input field, and OK/Cancel buttons.
    // Returns the input value if the user clicks OK, and null if the user clicks Cancel.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name: ", function(userInput) {
    console.log("User input:", userInput);
    rl.close();
});

// 14. console.timeLog():
    // Logs the value of a timer that was started by a call to console.time().
console.time("Timer");
for (let i = 0; i < 10000; i++){} // some opertaions
console.timeLog("Timer");

// 15. console.count():
    // Logs the number of times that this particular call to count() has been called.
console.count("Counter");
console.count("Counter");
console.count("Counter");

// 16. console.countReset():
    // Resets the value of the counter.
console.countReset("Counter");

// 17. console.dir():
    // Displays an interactive list of the properties of the specified JavaScript object.
const obj = { "name" : "Shayan", "age" : 28};
console.dir(obj);    // { name: 'Shayan', age: 28 }        // Display object properties in an interactive list.

// 18. console.dirxml():
    // Displays an XML/HTML element representation of the specified object.
console.dirxml(document.body);  // Display an XML/HTML element representation of the specified object.  // <body>...</body> 

// 19. console.debug():
    // Outputs a message to the console with the log level "debug".
console.debug("Debug message...");  // Log a message with the log level "debug".    // Debugging message. 

// 20. console.groupCollapsed():
    // Creates a new inline group, indenting all following output by another level.
console.groupCollapsed("Group");
console.log("Hello, World!");
console.groupEnd(); // Create a new inline group, indenting all following output by another level.  // Grouping output in a collapsed group.    // Hello, World!    // End of group. 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
