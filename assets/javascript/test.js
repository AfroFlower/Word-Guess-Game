$(document).ready(function() {
    alert("Welcome To The Game! Press any letter key to get started!");
    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    // 1. Create a for-loop to iterate through the letters array.
    for (var i = 0; i < letters.length; i++) {

      // Inside the loop...

      // 2. Create a variable named "letterBtn" equal to $("<button>");
      var letterBtn = $("<inputLetter>");

      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    //   letterBtn.addClass("letter-button letter letter-button-color");

      // 4. Then give each "letterBtn" a data-attribute called "data-letter".
      letterBtn.attr("data-letter", letters[i]);

      // 5. Then give each "letterBtns" a text equal to "letters[i]".
      letterBtn.text(letters[i]);

      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
      $("#inputLetter").append(letterBtn);

    }
    var userText = document.getElementById("inputLetter");

      // 7. Create an "on-click" event attached to the ".letter-button" class.
      $("inputLetter").on("click", function() {

        // Inside the on-click event...

        // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
        var theWord = $("<div>");

        // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
        // theWord.addClass("letter fridge-color");

        // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
        // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
        theWord.text($(this).attr("data-letter"));

        // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
        // Again you can see we use that find, and once its found we append the item
        $("#inputLetter").append(theWord);

      });