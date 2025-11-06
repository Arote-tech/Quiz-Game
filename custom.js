// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const currentQuestionsSpan = document.getElementById("current-questions");
const scoreSpan = document.getElementById("score");
const answersContainer = document.getElementById("answers-container");
const progressBar = document.getElementById("progress");
const resultScreen = document.getElementById("result-screen");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const totalQuestionsSpan = document.getElementById("total-questions");



const quizQuestions = [
    {
        Question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ],

        Question: "Which planet is known as the red planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ],

        Question: "What is the largest ocean on earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Artic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ],

        Question: "Where is the Mount Everest found?",
        answers: [
            { text: "the Himalayas", correct: true },
            { text: "the Ganges", correct: false },
            { text: "the Andes", correct: false },
            { text: "Mariana Trench", correct: false }
        ],

        Question: "Who was the first man to land in the moon?",
        answers: [
            { text: "Mahatma Ghandi", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Benito Mussolini", correct: true },
            { text: "Karl Max", correct: false }
        ],
    }
]


let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz () {
    console.log("Quiz started")
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove["active"];
    quizScreen.classList.add["active"];

    showQuestion ()
}

function showQuestion () {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionsSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = [currentQuestionIndex/quizQuestions.length] * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)
        answersContainer.appendChild(button);
    })
}

function selectAnswer (event) {
    if (answersDisabled) return
    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        } else if(button === selectedButton){
             button.classList.add("incorrect")
        }
    })
    if(isCorrect){
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if(currentQuestionIndex < quizQuestions.length){
            showQuestion()
        } else {
            showResults()
        }
    },1000)
}

function showResults () {
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100

    if(percentage === 100){
        resultMessage.textContent = "Perfect!, You are a genius!";
    } else if(percentage >= 80){
         resultMessage.textContent = "Great Job!, You know your stuff!";
    } else if(percentage >= 60){
         resultMessage.textContent = "Good effort!, Keep learning!";
    } else if(percentage >= 40){
         resultMessage.textContent = "Not bad!, Try again to improve!";
    } else {
         resultMessage.textContent = "Keep studying!, You will get better!";
    }

}

function restartQuiz () {
    resultScreen.classList.remove("active")

    startQuiz();
}



