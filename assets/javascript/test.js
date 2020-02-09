$(document).ready(function (){
    alert("Welcome To The Game! Press any letter key to get started!");

    // WORD Arry VARIABLES
    var words = ["rose", "tulip", "sunflower", "daisy",]
    var word = words[Math.floor(Math.random() * words.length)];

        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = word.length;
        console.log(remainingLetters)

    var winningWord = "";
    var remainingGuesses = 0;
    var correctLetters = "";
    var wrongLetters = "";
    var wins = 0;
    var loss = 0;


        var userText = document.getElementById("correct-letter");
            document.onkeyup = function(event){
            userText.textContent = event.key;

            correctLetters = $("<correct-letters>");

            // when user presses correct letter, add letter to correct letters that add to input letters
            if ( correctLetters == words) {
                correctLetters += $(this).val();
                $("#correct-letters").append(answerArray);

            // if (remainingLetters > 0){
            //     // Show the player their progress
            //     $("#correct-letter").append(answerArray.join(" "));
            // }        

            // console.log(remainingLetters);
            
        };
    };
});
    