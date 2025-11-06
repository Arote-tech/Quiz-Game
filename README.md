
body {
    background: #f5efef;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    font-family: sans-serif;
}

.container {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    position: relative;

}

/* SCREENS */
.screen {
    display:none;
    padding: 2rem;
    text-align: center;

}

.screen.active {
    display: block;

}

/* START SCREEN */
#start-screen h1{
    color: #e86a33;
    margin-bottom: 20px;
    font-size: 2.5rem;

}

#start-screen p{
    color: #e86a33;
    margin-bottom: 30px;
    font-size: 1.5rem;

}


.quiz-header {
    margin-bottom: 2rem;
}

#question-text {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.quiz-info {
    display: flex;
    justify-content: space-between;
    color: #666;
    font-size: 1rem;
    margin-bottom: 10px;
}

.answers-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 25px;
}

.answer-btn {
    background-color: #f8f0e5;
    color: #333;
    border: 2px solid #eadbc8;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease;
}

.answer-btn:hover {
    background-color: #eadbc8;
    border-color: #dac0ae;
}

.answer-btn.correct {
    background-color: #e6fff0;
    border-color: #a3fec4;
    color: #28a745;

}

.answer-btn.incorrect {
    background-color: #fff0f0;
    border-color: #ffbdbd;
    color: #dc3545;
    
}

.progress-bar {
    height: 10px;
    background-color: #f8f8e5;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 20px;
}

.progress {
    height: 10px;
    background-color: #e86a33;
    width: 0%;
    transition: width 0.3s ease;
}

/* RESULT SCREEN */
#result-screen {
    color: #e86a33;
    margin-bottom: 30px;
}

.result-info {
    background-color: #f8f0e5;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
}

.result-info p {
    font-size: 1.2rem;
    color: #333;
     margin-bottom: 1rem;
}

.result-message {
    font-size: 1.5rem;
    font-weight: 600;
    color: #e86a33;
}

button {
    background-color: #e86a33;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 15px 30px;
    font-size: 1.1rem;
    cursor: pointer;
}



<div class = "container">
            <div class = "screen active" id = "start-screen">
                <h1>Quiz Time!</h1>
                <p>Test your knowledge with these fun questions</p>
                <button id = "start-btn">Start</button>
            </div>
            <div class = "screen" id = "quiz-screen">
                <div class = "quiz-header">
                    <h2 id = "question-text">Questions will go here</h2>
                    <div class ="quiz-info">
                        <p>Question <span id = "current-question">1</span>of 
                            <span id = "total-questions">5</span>
                        </p>

                        <p>Score: <span id = "score">0</span></p>
                    </div>

                </div>
                <div id = "answers-container" class = "answers-container">
                    <!-- Answers will be inputted here later from our js -->
                </div>

                <div class = "progress-bar">
                    <div id = "progress" class = "progress"></div>

                </div>

                <div id = "result-screen" class = "screen">
                    <h1>Quiz Results</h1>
                    <div class = "result-info">
                        <p>You scored <span id = "final-score">0</span>out of 
                            <span id = "max-score">5</span>
                        </p>
                        <div id = "result-message">Good job</div>
                    </div>
                    <button id = "restart-btn">Restart Quiz</button>

                </div>


            </div>
        </div>



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


