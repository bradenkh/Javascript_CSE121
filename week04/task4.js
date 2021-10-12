/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
var myPerson = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myPerson["name"] = "Braden";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myPerson["photo"] = "images/my_picture.png";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myPerson["favoriteFoods"] = ["Ice Cream", "Pizza", "Tacos"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myPerson["hobbies"] = [
   "Cycling",
   "Ice Skating",
   "Rock-Climbing",
   "Spending time with my wife",
];

// Step 6: Add another property named placesLived with a value of an empty array
myPerson["placesLived"] = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myPerson.placesLived.push({ place: "", length: "" });

// Step 8: For each property, add appropriate values as strings
myPerson.placesLived[0].place = "Pocatello";
myPerson.placesLived[0].length = "1 Year";
// Step 9: Add additional objects with the same properties for each place you've lived
myPerson.placesLived.push({ place: "Idaho Falls", length: "17 years" });
myPerson.placesLived.push({ place: "Argentina", length: "2 Years" });
myPerson.placesLived.push({ place: "Rexburg", length: "2 Years" });
/* OUTPUT */

console.log(myPerson);
// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = myPerson.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", myPerson.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", myPerson.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
myPerson.favoriteFoods.forEach((food, i) => {
   var liElement = document.createElement("li");
   liElement.innerText = food;
   document.getElementById("favorite-foods").appendChild(liElement);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myPerson.hobbies.forEach((hobby, i) => {
   var liElement = document.createElement("li");
   liElement.innerText = hobby;
   document.getElementById("hobbies").appendChild(liElement);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

myPerson.placesLived.forEach((obj) => {
   var dtElement = document.createElement("dt");
   dtElement.innerText = obj["place"];
   document.getElementById("places-lived").appendChild(dtElement);
   var ddElement = document.createElement("dd");
   ddElement.innerText = obj["length"];
   document.getElementById("places-lived").appendChild(ddElement);
});
