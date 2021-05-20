var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#timer");





// Create a function for the timer
function startTimer() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft + " seconds";
        }
        
        else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }

    }, 1000)
};






// Start timer on click of startButton
startButton.addEventListener("click", function(){
    startTimer();
});

