// $(document).ready(function () {
//     alert("Welcome To The Game! Press any letter key to get started!");

//     // WORD Arry VARIABLES
//     var words = ["rose", "tulip", "sunflower", "daisy",]

//     // Make variables for the first letter and/or second letter, 
//     // and other inputs/outputs
//     var winningWord
//     var remainingGuesses
//     var correctLetters
//     var wrongLetters
//     var wins
//     var loss

//     // Here we are provided an initial array of letters.
//     var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
//     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];

//     for (var i = 0; i < letters.length; i++) {

//         var letterKey = $("<inputLetter>");

//         letterKey.attr("data-letter", letters[i]);

//         letterKey.text(letters[i]);

//         $("#inputLetter").append(letterKey);

//     };

//     var userText = document.getElementById("inputLetter");
//       // Next, we give JavaScript a function to execute when onkeyup event fires.
//       document.onkeyup = function(event){
//       userText.textContent = event.key;

//       var theWord = $("<div>");

//       letterGuessed.text($(this).attr("data-letter"));

//       $("#inputLetter").append(letterGuessed);
//     }; 

// });




// // Code comment section

// // 1. Create the html page and basic format
// // 2. insert the js and css external files 
// // 3. insert jquery link
// // 4. style the css 
// // 5. use a function to alert the user to the page when it first loads
// // 6. 

// // ***From the calculator test, use this example to clear your game when the 
// // final image result pops up*** Use a function to initialize our calculator.
//       // This way when the user hits clear, we can guarantee a reset of the app.
//       // function initializeCalculator() {
//       //   firstNumber = "";
//       //   secondNumber = "";
//       //   operator = "";
//       //   isOperatorChosen = false;
//       //   isCalculated = false;

//       //   $("#first-number, #second-number, #operator, #result").empty();
//       // }