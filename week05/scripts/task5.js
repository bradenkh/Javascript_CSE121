/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
var today = new Date();

// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
var dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
var msg = "";
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek > 0 && dayOfWeek < 6) {
   msg = "Hang in there!";
} else {
   msg = "Woohoo!  It is the weekend!";
}

/* SWITCH, CASE, BREAK */
// Step 1: Declare a new variable to hold another message
var msg2 = "";
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
   case 0:
      msg2 = "Sunday";
      break;
   case 1:
      msg2 = "Monday";
      break;
   case 2:
      msg2 = "Tuesday";
      break;
   case 3:
      msg2 = "Wednesday";
      break;
   case 4:
      msg2 = "Thursday";
      break;
   case 5:
      msg2 = "Friday";
      break;
   case 6:
      msg2 = "Saturday";
      break;
   default:
      throw "bad day of week";
      break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerText = msg;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerText = msg2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
var temples = [];
var templesAscend;

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(myArray) {
   console.log("running output");
   document.getElementById("temples").innerHTML = "";
   myArray.forEach((element) => {
      var thisTemple = document.createElement("article");
      var templeName = document.createElement("h3");
      templeName.innerText = element.templeName;
      var location = document.createElement("h4");
      location.innerText = element.location;
      var dedicated = document.createElement("h4");
      dedicated.innerText = element.dedicated;
      var img = document.createElement("img");
      img.setAttribute("src", element.imageUrl);
      thisTemple.appendChild(templeName);
      thisTemple.append(location);
      thisTemple.append(dedicated);
      thisTemple.append(img);
      document.getElementById("temples").appendChild(thisTemple);
   });
   return;
}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
// Step 7: Finally, call the output function and pass it the list of temples
fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
   .then((response) => response.json())
   .then((data) => {
      console.log("running fetch");
      data.forEach((element) => {
         temples.push(element);
      });
      output(temples);
      temples.sort()
      templesAscend = true;
      sortBy(temples);
   });

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
   var articles = document.querySelectorAll("#temples");
   articles.forEach((item) => {
      item.innerHTML = "";
   });
   document.getElementById("temples").innerHTML = "<h3>Loading temples...</h3>";
}

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(temples) {
   if (document.getElementById("sortBy").value == "templeNameDescending") {
      if (templesAscend) {
         temples.reverse();
         templesAscend = false;        
      }
      output(temples); 
   }
   else {
      if (!templesAscend) {
         temples.reverse();
         templesAscend = true;
      }
      output(temples);
   }
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("change", () => {
   sortBy(temples, document.getElementById("sortBy").value);
});
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
