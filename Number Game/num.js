console.log("Number.js");
let randomNumber = parseInt(Math.random() * 100);
console.log(randomNumber);
let guess = 1;
let guessBody = document.getElementById("guessID");
let messageBody = document.getElementById("messageID");
let userInput = document.getElementById("userInput");
let submitButton = document.getElementById("subBtn");
let restartButton = document.getElementById("restartBtn");
restartButton.addEventListener("click", restartGuess);
submitButton.addEventListener("click", function () {
let regex = /[0-9]{1}/;
let numbersInput  = userInput.value;
if (regex.test(numbersInput)) {
  validateGuess(userInput.value);
  console.log(randomNumber);
  logGuess();
  userInput.classList.remove('is-invalid');
}
else{
  userInput.classList.add('is-invalid');
}
  userInput.value = "";
});

function validateGuess(guess) {
  if (guess == randomNumber) {
    messageBody.innerHTML = `<div class="alert alert-primary" role="alert">Guess is Correct✔️
      </div>`;
    submitButton.setAttribute("disabled", "");
  }
  else if (guess < randomNumber) {
      messageBody.innerHTML = `<div class="alert alert-primary" role="alert">Guess was Too Short🤔 
      </div>`;
    } else if (guess > randomNumber) {
        messageBody.innerHTML = `<div class="alert alert-primary" role="alert">Guess was Too Long🤔 
        </div>`;
    } else {
        messageBody.innerHTML = `<div class="alert alert-primary" role="alert">Guess was Incorrect❌
      </div>`;
  }
}

function logGuess() {
  guess++;
  if (guess == 10) {
    guessBody.innerText = "GAME OVER";
    userInput.setAttribute("disabled", "");
    submitButton.setAttribute("disabled", "");
    messageBody.innerHTML = `Number was ${randomNumber}`;
  } else {
    guessBody.innerHTML = `${11 - guess} Guesses Are Left `;
  }
}

function restartGuess() {
  location.reload();
}
