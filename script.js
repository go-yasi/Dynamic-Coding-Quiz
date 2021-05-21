var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");

var quizDiv = document.querySelector("#quiz");

// Object with questions and answer options
var questions = [{
    questions: "Here is the question?",
    answers: ["A1", "A2", "A3", "A4"],
    correct: "A3"
},
{
    questions: "Now another is the question?",
    answers: ["A1", "A2", "A3", "A4"],
    correct: "A3"
},
{
    questions: ["Here is the question?"],
    answers: ["A1", "A2", "A3", "A4"],
    correct: "A3"
},
{
    questions: ["Here is the question?"],
    answers: ["A1", "A2", "A3", "A4"],
    correct: "A3"
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

