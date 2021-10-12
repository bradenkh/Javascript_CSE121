/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
let add = function(number1, number2) {
   return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
let addNumbers = function() {
   var addend1 = document.getElementById('addend1').value * 1;
   var addend2 = document.getElementById('addend2').value * 1;
   document.getElementById('sum').value = add(addend1, addend2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
   return number1 - number2;
}

function subtractNumbers() {
   var minuend = document.getElementById('minuend').value * 1;
   var subtrahend = document.getElementById('subtrahend').value * 1;
   document.getElementById('difference').value = subtract(minuend, subtrahend);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (number1, number2) => {
   return number1 * number2;
}

let multiplyNumbers = () => {
   var factor1 = document.getElementById('factor1').value;
   var factor2 = document.getElementById('factor2').value;
   document.getElementById('product').value = multiply(factor1, factor2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(dividend, divisor) {
   return dividend / divisor;
}

function divideNumbers() {
   var dividend = document.getElementById('dividend').value * 1;
   var divisor = document.getElementById('divisor').value * 1;
   document.getElementById('quotient').value = divide(dividend, divisor);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
var date = new Date();

// Step 2: Declare a variable to hold the current year
var year;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').innerHTML = year;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const myArray = [];
for (let i = 1; i < 26; i++) {
   myArray.push(i); 
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById('array').innerHTML = myArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = myArray.filter((num) => {
   if (num % 2) {
      return num;
   }
})

document.getElementById('odds').innerHTML = odds;
 

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = myArray.filter((num) => {
   if (!(num % 2)) {
      return num;
   }
})

document.getElementById('evens').innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById('sumOfArray').innerHTML = myArray.reduce((num1, num2) => {return num1 + num2;})

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById('multiplied').innerHTML = myArray.map((num) => {return num*2;});

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById('sumOfMultiplied').innerHTML = myArray.map((num) => {return num*2;}).reduce((num1, num2) => {return num1 + num2;});