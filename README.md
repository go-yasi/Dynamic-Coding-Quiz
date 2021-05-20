# Coding Quiz Challenge

## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

What was your motivation?
Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
What problem does it solve?
What did you learn?
What makes your project stand out?

Your README might also describe some of the challenges you faced, as well as the features you plan to implement in the future. And if your project is deployed, make sure to include a link to the deployed application so people can see it in action!

## Process
1. First, I identified what I needed on the page and added to HTML. I added container for the quiz, a start button, a link to view high scores link, and a space for the timer.
2. Next, I wanted to create a timer that would start when a users clicks on the "Start the Quiz" button. I first created an event listener for the start button, then began creating the timer function. 
3. To create the timer function, I first defined a varible (timeLeft) that would start at the number of seconds I wanted the countdown to be. Then, I set a conditional statement to subtract one from the timeLeft variable every second, as long as timeLeft was greater than one. Then I added an else that would clear the timer text content and clear the timeInterval function.
4. My next step was to call the startTimer function inside my start button event listener. After completing this step, my timer successfully began to run once the start button was clicked! This was a very exciting moment for me. 
5. I also needed to create a function that would actually start the quiz once a user pressed the start button.

## Usage


## Conclusion
