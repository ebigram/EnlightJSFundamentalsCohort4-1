// // CONCEPTS

// // 0) Logging
// console.log("hello");
// // 1.1) Writing to a webpage
// document.write("hello");
// // 1.2) Write to a webpage at a certain ID
// document.getElementById("heading").innerHTML = "hello from javascript"
// // 2) Variables — an item of data with a name and a value 
// // let name = "cohort 4";
// // console.log(name); 
// // 3) Functions w/ paramaters — a set of instructions
// function sayHello(name) {
//   console.log("hello " + name);
// }

// sayHello("Samay");


// // 4) Numbers & Operators
// let number1 = 6;
// let number2 = 10;

// console.log(number1 * number1);


// // 5) Event Listeners

// document.addEventListener("click", clicked);

// function clicked(event) {
//   console.log(event);
//   console.log("Clicked");
// }



// ——————————————————————————————————————————————————————
// CALCULATOR DEMO

// 1) get elements by IDs
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

// 2) add event listeners to IDs

document.getElementById("add").addEventListener("click", add);

document.getElementById("subtract").addEventListener("click", subtract);

document.getElementById("multiply").addEventListener("click", multiply);

document.getElementById("divide").addEventListener("click", divide);



// 2) create operator functions

function add() {
  console.log(parseInt(number1.value) + parseInt(number2.value));
}

function subtract() {
  console.log(parseInt(number1.value) - parseInt(number2.value));
}

function multiply() {
  console.log(parseInt(number1.value) * parseInt(number2.value));
}

function divide() {
  console.log(parseInt(number1.value) / parseInt(number2.value));
}







