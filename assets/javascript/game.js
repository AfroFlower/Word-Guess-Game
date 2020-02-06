$(document).ready(function () {
    alert("Welcome To The Game! Press any letter key to get started!");

});

var userText = document.getElementById("inputLetter");
// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  userText.textContent = event.key;
  $("#inputLetter").append()
};



// Code comment section

// 1. Create the html page and basic format
// 2. insert the js and css external files 
// 3. insert jquery link
// 4. style the css 
// 5. use a function to alert the user to the page when it first loads
// 6. 