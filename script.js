var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");

// sections
var startDiv = document.querySelector("#start-quiz");
var quizDiv = document.querySelector("#quiz-section");

// Dynamically created elements for questions and answers
var questionDiv = document.createElement("div");
var answersDiv = document.createElement("div");
var answerOption1 = document.createElement("div");
var answerOption2 = document.createElement("div");
var answerOption3 = document.createElement("div");
var answerOption4 = document.createElement("div");

// Assign new classes to dynamically created elements
questionDiv.setAttribute("class", "questions");
answersDiv.setAttribute("class", "answers");
answerOption1.setAttribute("class", "op1 btn");
answerOption2.setAttribute("class", "op2 btn");
answerOption3.setAttribute("class", "op3 btn");
answerOption4.setAttribute("class", "op4 btn");

// starting values for scores
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
    answers: ["returns a floating-point, random number in the range from 0 (inclusive) up to but not including 1", "returns the largest integer less than or equal to the given number", "ends function execution and returns the specified value to the location where it was called", "checks two values and returns a boolean"],
    correct: "returns the largest integer less than or equal to the given number"
},
{
    questions: "An array is enclosed within _____________.",
    answers: ["square brackets", "single quotes", "parentheses", "angled brackets"],
    correct: "square brackets"
},
{
    questions: "The .length property of a string returns _____________.",
    answers: ["a randomly generated number between 0 and 1", "the number of characters that make up the string", "the index value of the item",  "the sum of all numbers in an array"],
    correct: ""
}];

// Function to start timer
function startTimer() {
    // starting count
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft + " seconds";
        } 
        // else if () {
        //     clearInterval(timeInterval);
        // }
        else {
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

    // reset score
    currentScore = 0;
    finalScore = 0;
    
    // append questions, answers, and answer option divs
    quizDiv.appendChild(questionDiv);
    quizDiv.appendChild(answersDiv);
    answersDiv.appendChild(answerOption1);
    answersDiv.appendChild(answerOption2);
    answersDiv.appendChild(answerOption3);
    answersDiv.appendChild(answerOption4);

    // Add quesiton to page
    questionDiv.textContent = questions[0].questions;

    // Add answer options to page
    answerOption1.textContent = questions[0].answers[0];
    answerOption2.textContent = questions[0].answers[1];
    answerOption3.textContent = questions[0].answers[2];
    answerOption4.textContent = questions[0].answers[3];
};

// Need function to log user's answer selection and determine if it's right/wrong and calculate score
function recordWins(event) {
    var userChoice = event.target.textContent;
    console.log("I'm working!");
    // if user selects the correct answer, add 10pts to current score, and add to local storage
    if (userChoice === questions.correct) {
        currentScore = currentScore + 10;
        localStorage.setItem("Current Score", currentScore);
    }
    // otherwise, subtract 10 from current score and add to local storage
    else {
        currentScore = currentScore - 10;
        localStorage.setItem("Current Score", currentScore);
    }
};

// Need function to calculate final score 
function finalScoreCount() {
    // add seconds left in timer to current score to get the final score, then store in local storage
    if (timeLeft > 0) {
        finalScore = currentScore + timeLeft;
    }
    else {
        finalScore = currentScore;
    }
    localStorage.setItem("Final Score", finalScore);
};

// Need "move to next question" function
function nextQuestion() {
    questionDiv.textContent = questions[1].questions;

    // Add answer options to page
    answerOption1.textContent = questions[1].answers[0];
    answerOption2.textContent = questions[1].answers[1];
    answerOption3.textContent = questions[1].answers[2];
    answerOption4.textContent = questions[1].answers[3];
};


// stop the countdown when the last question is answered
function stopCountdown() {
    // after answering last question
    // stop timer
    clearInterval(timeInterval);
    
    
}

// Need eventListener that when any answerOption is clicked (so anything inside answersDiv), move to next question

answersDiv.addEventListener("click", nextQuestion);
answersDiv.addEventListener("click", recordWins);


