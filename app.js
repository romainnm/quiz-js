import answers from "./utils/constant.js";
import { quizFormJs, scoreJs, fieldsetJs } from "./utils/dom-elements.js";
import showResult from "./controllers/diplayResultController.js";

// Variables
let selectedAnswers = [];
let scoreCounter = 0;

// Current Score
scoreJs.textContent = `${scoreCounter}/${answers.length}`;

// Form management
quizFormJs.addEventListener("submit", (e) => {
  e.preventDefault();
  resetSelectedAnswersAndCounter();
  addToselectedAnswers(answers, selectedAnswers);
  compareAnswers(answers, selectedAnswers);
  showResult(scoreCounter);
});

function addToselectedAnswers(answers, answersFromQuiz) {
  for (let i = 1; i <= answers.length; i++) {
    answersFromQuiz.push(
      document.querySelector(`input[name=q${i}]:checked`).value
    );
  }
}
function compareAnswers(answers, answersFromQuiz) {
  resetClasses();
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answersFromQuiz[i]) {
      highlightQuestion("correct", i);
      incrementCounter();
      updateCounter();
    } else {
      highlightQuestion("incorrect", i);
    }
  }
}
function highlightQuestion(classValue, questionNumber) {
  if (classValue === "incorrect") {
    const wrongQuestion = document.querySelector(`.q${questionNumber + 1}`);
    wrongQuestion.classList.add("incorrect");
    setTimeout(() => {
      wrongQuestion.classList.remove("incorrect");
    }, 1500);
  }
  if (classValue === "correct") {
    const rightQuestion = document.querySelector(`.q${questionNumber + 1}`);
    rightQuestion.classList.add("correct");
  }
}

// Counter
function incrementCounter() {
  return (scoreCounter += 1);
}
function updateCounter() {
  scoreJs.textContent = `${scoreCounter}/${answers.length}`;
}

// RESET functions
function resetSelectedAnswers() {
  selectedAnswers = [];
}
function resetCounter() {
  scoreCounter = 0;
}
function resetSelectedAnswersAndCounter() {
  resetSelectedAnswers();
  resetCounter();
}
function resetClasses() {
  fieldsetJs.forEach((fieldset) => {
    if (fieldset.classList.contains("incorrect")) {
      fieldset.classList.remove("incorrect");
    } else if (fieldset.classList.contains("correct")) {
      fieldset.classList.remove("correct");
    }
  });
}
