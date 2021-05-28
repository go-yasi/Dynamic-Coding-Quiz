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

// starting index value for 
var questionIndex = 0;

// Object with questions and answer [options]
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


// Function to reset score on page load
function init(){
    currentScore = 0;
    finalScore = 0;
}

// Function to start timer
function startTimer() {
    // starting count
    var timeLeft = 60;
    // if there is more than one second left, keep subtracting one second every second
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft + " seconds";
        } 
        // otherwise, end the timer and replace text
        else {
            timer.textContent = "Game Over!";
            clearInterval(timeInterval);
        }
    }, 1000)
    // function to ask question 1
    askQ1();
};

// Start timer and move to question 1 on click of startButton
startButton.addEventListener("click", function(){
    startTimer();
});

// Function to append dynamically created elements and ask first question 
function askQ1(){
    // hide starting block
    startDiv.style.display = "none";
    
    // append questions, answers, and answer option divs
    quizDiv.appendChild(questionDiv);
    quizDiv.appendChild(answersDiv);
    answersDiv.appendChild(answerOption1);
    answersDiv.appendChild(answerOption2);
    answersDiv.appendChild(answerOption3);
    answersDiv.appendChild(answerOption4);

    // Add quesiton to page
    questionDiv.textContent = questions[questionIndex].questions;

    // Add answer options to page
    answerOption1.textContent = questions[questionIndex].answers[0];
    answerOption2.textContent = questions[questionIndex].answers[1];
    answerOption3.textContent = questions[questionIndex].answers[2];
    answerOption4.textContent = questions[questionIndex].answers[3];
    
    // cycle through the same process with all the following question+answers in the object
    questionIndex++;
};

// Ask next question
function askNextQ() {
    // conditional to stop game after all questions are answered
    if (questionIndex === 5) {
        questionDiv.textContent = "Game Over!";
        // hide the answers
        answersDiv.textContent = "";
        // need something to save the final score
        // need something to stop the timer if all questions are answered
        return;
    }

    // Add new question to page
    questionDiv.textContent = questions[questionIndex].questions;

    // Add new answer options to page
    answerOption1.textContent = questions[questionIndex].answers[0];
    answerOption2.textContent = questions[questionIndex].answers[1];
    answerOption3.textContent = questions[questionIndex].answers[2];
    answerOption4.textContent = questions[questionIndex].answers[3];
    
};


// Function to log user's answer selection, determine if it's right/wrong, and calculate score
function recordWins(event) {
    // variable to record user's answer selection
    var userChoice = event.target.textContent;
    // console log user's selection
    console.log("User selected: " + event.target.textContent);
    // console log correct answer
    console.log("Correct answer: " + questions[questionIndex].correct);

    // if user selects the correct answer, add 10pts to current score and console log 
    if (userChoice === questions[questionIndex].correct) {
        console.log(userChoice);
        currentScore = currentScore + 10;
        console.log("Current Score: " + currentScore);
    }
    // otherwise, subtract 10 from current score and console log
    else {
        currentScore = currentScore - 10;
        console.log("Current Score: ", currentScore);
    }
    questionIndex++;
};

// Function to calculate final score 
function finalScoreCount() {
    // add seconds left in timer to current score to get the final score, then store in local storage
    if (timeLeft > 0) {
        finalScore = currentScore + timeLeft;
    }
    else {
        finalScore = currentScore;
        // 
    }
    localStorage.setItem("Final Score", finalScore);
};


// Need eventListener that when any answerOption is clicked (so anything inside answersDiv), move to next question

answersDiv.addEventListener("click", askNextQ);
answersDiv.addEventListener("click", recordWins);