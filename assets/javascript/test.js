// this file is for testing out code

$(document).ready(function (){
    alert("Welcome To The Game! Press any letter key to get started!");

    // Word Array Variables
    var allWords = ["rose", "tulip", "sunflower", "daisy",]
    
    // randomizes the word choice
    var word = allWords[Math.floor(Math.random() * allWords.length)];

    // answerArray inputs underscores in word length value
    var answerArray = [];
    for (var i = 0; i < word.length; i++){
        answerArray[i] = "_";
    };    

    // create a string function for each word and thier index
    var wordsArray = word.split("");
    console.log(wordsArray);
    var res = word.charAt(0);
    console.log(res);

    $("#correct-letters").append(answerArray.join(" "))

    var remainingLetters = word.length;
    console.log(answerArray.join(" "))

    var winningWord = "";
    var remainingGuesses = 0;
    var correctLetters = "";
    var wrongLetters = "";
    var wins = 0;
    var loss = 0;    

    document.onkeyup = function(event){

            var userLetter = event.key;
            console.log(userLetter)

            correctLetters = $("#correct-letters")
            console.log(correctLetters)
        };

});