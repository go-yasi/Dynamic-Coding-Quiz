var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");

var quizDiv = document.querySelector("#quiz-section");

var questionDiv = document.createElement("div");
var answersDiv = document.createElement("div");
var answerOption1 = document.createElement("div");
var answerOption2 = document.createElement("div");
var answerOption3 = document.createElement("div");
var answerOption4 = document.createElement("div");

var startDiv = document.querySelector("#start-quiz");

var finalScore = 0;
var currentScore = 0;


// Object with questions and answer options
var questions = [{
    questions: "Which of the following is not an arithmetic operator?",
    answers: ["*", "+", "=", "%"],
    correct: "="
},
{
    questions: "What do we call a list of ordered, stored data?",
    answers: ["method", "object", "variable", "array"],
    correct: "array"
},
{
    questions: "What does the Math.floor function do?",
    answers: [
        "returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1", 
        "returns the largest integer less than or equal to the given number", 
        "ends function execution and returns the specified value to the location where it was called", 
        "checks two values and returns a boolean"],
    correct: "returns the largest integer less than or equal to the given number"
},
{
    questions: "An array is enclosed within _____________.",
    answers: ["square brackets", "single quotes", "parentheses", "angled brackets"],
    correct: "square brackets"
},
{
    questions: "The .length property of a string returns _____________.",
    answers: [
        "a randomly generated number between 0 and 1", 
        "the number of characters that make up the string", 
        "the index value of the item", 
        "the sum of all numbers in an array"],
    correct: ""
}];
console.log(questions);

// Function to start timer
function startTimer() {
    // starting count
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft + " seconds";
        } else {
            timer.textContent = "Game Over!";
            clearInterval(timeInterval);
        }
    }, 1000)
    askfirstQuestion();
};

// Start timer on click of startButton
startButton.addEventListener("click", function(){
    startTimer();
});

// Function for first question 
function askfirstQuestion(){
    // hide starting block
    startDiv.style.display = "none";
    
    // append questions, answers, and answer option divs
    quizDiv.appendChild(questionDiv);
    quizDiv.appendChild(answersDiv);
    answersDiv.appendChild(answerOption1);
    answersDiv.appendChild(answerOption2);
    answersDiv.appendChild(answerOption3);
    answersDiv.appendChild(answerOption4);

    // Adding quesiton to page
    questionDiv.textContent = questions[0].questions;

    // Adding anser options to page
    answerOption1.textContent = questions[0].answers[0];
    answerOption2.textContent = questions[0].answers[1];
    answerOption3.textContent = questions[0].answers[2];
    answerOption4.textContent = questions[0].answers[3];

    // Assign new classes to dynamically created elements
    questionDiv.setAttribute("class", "questions");
    answersDiv.setAttribute("class", "answers");
    answerOption1.setAttribute("class", "op1 btn");
    answerOption2.setAttribute("class", "op2 btn");
    answerOption3.setAttribute("class", "op3 btn");
    answerOption4.setAttribute("class", "op4 btn");
};

// Need function to log user's answer selection and determine if it's right/wrong and calculate score
function recordAnswer() {
    var userChoice = "?";

    if (userChoice === questions.correct) {
        
    }
}

// Need eventListener that when any answerOption is clicked (so anything inside answersDiv), move to next question

// Need move to next question function

