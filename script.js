var startButton = document.querySelector("#start-button");






// Create a function for the timer to start
function startTimer() {
    var = timeLeft = 30;

    var timeInterval = setInterval(function () {
        timeLeft--;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000)
};






// Start timer on click of startButton
startButton.addEventListener("click", function(){

});

startTimer();