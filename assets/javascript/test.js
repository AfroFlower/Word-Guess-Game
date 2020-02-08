$(document).ready(function () {
    alert("Welcome To The Game! Press any letter key to get started!");

    // WORD Arry VARIABLES
    var words = ["rose", "tulip", "sunflower", "daisy",]

     var winningWord
     var remainingGuesses
     var correctLetters
     var wrongLetters
     var wins
     var loss

    // Here we are provided an initial array of letters.
     var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];

     for (let i = 0; i < letters.length; i++) {
        const element = letters[i];

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var letterBtn = $("<inputLetter>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        // letterBtn.addClass("letter-button letter letter-button-color");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr("data-letter", letters[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#inputLetter").append(letterBtn);
    }

    var userText = document.getElementById("inputLetter");
        document.onkeyup = function(event){
            userText.textContent = event.key;

            $("#inputLetter").append(letterBtn);
            
        }

});