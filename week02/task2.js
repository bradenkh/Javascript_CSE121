/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var my_name = 'Braden';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("span").innerHTML = my_name;

// Step 3: declare and instantiate a variable to hold the current year
var current_year = 2021;

// Step 4: place the value of the current year variable into the HTML file
document.getElementById("year").innerHTML = current_year;

// Step 5: declare and instantiate a variable to hold the name of your picture
var picture_name = "my_picture.png";

// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', 'images/my_picture.png');



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var foods = ['Ice Cream', 'Pizza', 'Tacos'];

// Step 2: place the values of the favorite foods variable into the HTML file
function put_foods(input_array) {
   document.getElementById("food").innerHTML = "";
   for (let i = 0; i < input_array.length; i++) {
      input_array[i];
      document.getElementById("food").innerHTML += ("<br>" + input_array[i]);
   }
}

put_foods(foods);

// Step 3: declare and instantiate a variable to hold another favorite food
var extra_food = "Grilled Cheese"

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(extra_food);

// Step 5: repeat Step 2
put_foods(foods);

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
put_foods(foods);

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
put_foods(foods);


