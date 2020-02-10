$(document).ready(function (){
    alert("Welcome To The Game! Press any letter key to get started!");

    // Word Arry Variables
    var words = ["rose", "tulip", "sunflower", "daisy",]
    // randomizes the word
    var word = words[Math.floor(Math.random() * words.length)];

    // answerArray inputs underscores in word length value
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    
    var remainingLetters = word.length;
    console.log(answerArray)

    var winningWord = "";
    var remainingGuesses = 0;
    var correctLetters = "";
    var wrongLetters = "";
    var wins = 0;
    var loss = 0;    


    var userText = document.getElementById("correct-letter");
        document.onkeyup = function(event){
           userText.textContent = event.key;
            
           remainingLetters = $("correct-letter");

            // $("#correct-letter").append(correctLetters);


            if (remainingLetters > 0) {
                // Show the player their progress
                return (answerArray.join(" "));
            };   

            console.log(remainingLetters)
            
        };

        // if (isOperatorChosen) {
        //     secondNumber += $(this).val();
        //     $("#second-number").text(secondNumber);
  
        //   }
        //   else {
        //     firstNumber += $(this).val();
        //     $("#first-number").text(firstNumber);
        //   }
  
        // });
});
    