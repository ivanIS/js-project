/**
 *  Example | Assign a function to a variable
 */
const foo = function() {
    console.log('foobar');
}
// Invoke it using the variable
foo();

/**
 * Example | Pass a function as an Argument
 */
function sayHello() {
    return "Hello, "
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

/**
 * Example | Return a function
 */
function sayHello0() {
    return function() {
        console.log("Hello!");
    }
}
// Invoke, using a variable
const someHello = sayHello0();
someHello();
// Invoke, using a double parentheses
sayHello0()();