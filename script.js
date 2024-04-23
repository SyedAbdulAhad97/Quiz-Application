const quizData = [
    {
        question: "What is the capital city of Pakistan?",
        options: ["Islamabad", "Karchi", "Lahore", ],
        answer: "Islamabad"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Al"],
        answer: "Au"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1920", "1912", "1930"],
        answer: "1912"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "WWhich of these animals is a marsupial?",
        options: ["Kangaroo", "Elephant", "Dolphin", "Eagle"],
        answer: "Kangaroo"
    }
];

let currentQuestion = 0;
let score = 0;
let studentName = "";
let studentRoll = "";
let studentBatch = "";
let studentSection = "";

function startQuiz() {
    studentName = document.getElementById('student-name').value;
    studentRoll = document.getElementById('student-roll').value;
    studentBatch = document.getElementById('student-batch').value;
    studentSection = document.getElementById('student-section').value;
    if (studentName.trim() === "" || studentRoll.trim() === "" || studentBatch.trim() === "" || studentSection.trim() === "") {
        alert("Please enter all student details!");
        return;
    }
    document.getElementById('student-details').style.display = "none";
    document.getElementById('quiz').style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = '';
    quizData[currentQuestion].options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => chooseOption(option);
        optionsElement.appendChild(optionButton);
    });
}

function chooseOption(option) {
    if (option === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('result').style.display = "block";
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h2>Quiz Result</h2>
                               <p>Student Name: ${studentName}</p>
                               <p>Roll Number: ${studentRoll}</p>
                               <p>Batch: ${studentBatch}</p>
                               <p>Section: ${studentSection}</p>
                               <p>You scored ${score} out of ${quizData.length}!</p>`;
}
