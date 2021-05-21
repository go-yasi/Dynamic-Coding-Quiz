var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");

var quizDiv = document.querySelector("#quiz");

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


// var questions = [{
//     questions: "Question?",
//     answers: ["1", "2", "3," "4"],
//     correct: "xxx"
// },
// {
//     questions: "Question?",
//     answers: ["Boolean", "x"],
//     correct: "xxx"
// }];
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
};

// defining questionCounter start value
var questionCounter = 0;
console.log(questionCounter);

// Function for first question 
function firstQuestion(){
    var question1 = questions[questionCounter];
    console.log(question1);

    var question = question1.question;

    var question2 = document.createElement("h2");
    question2.textContent = question;
    quizDiv.appendChild();

    var answers = question1.answers;
    var correct = question1.correct;

    questionCounter++;
};

// Start timer on click of startButton
startButton.addEventListener("click", function(){
    startTimer();
});

