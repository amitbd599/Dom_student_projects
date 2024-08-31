const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
        correct: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Fe"],
        correct: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Silver"],
        correct: 2
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        choices: ["China", "Brazil", "UK", "Japan"],
        correct: 1
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
        correct: 2
    },
    {
        question: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correct: 2
    }
];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    document.getElementById('question').textContent = currentQuestion + 1 + ") " + currentQuizData.question;
    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice, index) => {
        choice.textContent = currentQuizData.choices[index];
        choice.style.backgroundColor = '#007bff';
        choice.disabled = false;
    });
    document.getElementById('nextButton').style.display = 'none';
}

function selectAnswer(index) {
    const currentQuizData = quizData[currentQuestion];
    const choices = document.querySelectorAll('.choice');
    if (index === currentQuizData.correct) {
        score++;
        choices[index].style.backgroundColor = '#28a745';
    } else {
        choices[index].style.backgroundColor = '#dc3545';
        choices[currentQuizData.correct].style.backgroundColor = '#28a745';



    }
    choices.forEach(choice => {
        choice.disabled = true;
    });
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz').innerHTML = `
        <h2>Your Score: ${score} out of ${quizData.length}</h2>
        <button id="restartButton">Restart Quiz</button>
    `;

    // Add event listener to the restart button after it is created
    document.getElementById('restartButton').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz').innerHTML = `
        <div id="question"></div>
        <div class="choices">
            <button class="choice" onclick="selectAnswer(0)">Choice 1</button>
            <button class="choice" onclick="selectAnswer(1)">Choice 2</button>
            <button class="choice" onclick="selectAnswer(2)">Choice 3</button>
            <button class="choice" onclick="selectAnswer(3)">Choice 4</button>
        </div>
        <button id="nextButton" onclick="nextQuestion()">Next Question</button>
        <div id="scoreContainer"></div>
    `;
    loadQuestion();
}

window.onload = loadQuestion;
