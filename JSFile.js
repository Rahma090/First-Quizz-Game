
//we create the buttons that will open another windows for each level(beginner,intermediate,advanced)
//we need to create a start button:


//We create a function which will generate our quiz:
//quiz questions, where to put quiz,place for quiz & result button
//we need first to create the questions of each level:

function startQuiz(level) {
var url = `QuizSpaceFile.html?level=${level}`
window.open(url, '_blank', 'width=600,height=400')
}

var biggenersQuestions =[
        {
        question: "what type of allergen we have in chocolate?",
        answers: [
            {Text:"Wheat.",correct: false},
            {Text:"Eggs.",correct: false},
            {Text:"All the ubove.", correct: true}
                 ]},
        {
        question:"How many main food allergens are present?",
        answers: [
            {Text:7,correct: false},
            {Text:9, correct: true},
            {Text:6, correct: false},
                 ]},
        {
        question: "what if you own a restuarant and a customer asks whether a food contain an allergen. ",
        answers: [
            {Text:"Dismiss the customer.",correct: false},
            {Text:"Tell them that you don't know.",correct: false},
            {Text:"Consult the allergen risk matrix.", correct: true }
              ]},
        {
        question:"Which of these is a life-threatening symptom?",
        answers: [
            {Text:"Having itchy or raised skin.",correct: false},
            {Text:"Vomiting.",correct: false},
            {Text:"Having trouble swallowing or speaking.", correct: true }
               ]},
]

var intermediateQuestions =[
        {
        question: "What actions should you take after purchasing a new product that contains allergens for your friends?",
        answers: [
            {Text:"Get the package, those with allergies will read it later.", correct: false},
            {Text:"Dispose of the package.", correct: false },
            {Text:"Accept it , read the ingredients & let your friends know.", correct: true },
                 ]},
        {
        question:"Which one of the following allergens is often used to glaze food products?",
        answers: [
            {Text:"Lupin.", correct: false},
            {Text:"Soya.", correct: false},
            {Text:"Egg.", correct: true },
                 ]},
        {
        question: "what is a food intolerance?",
        answers: [
        {Text:"when your body has difficulty digesting a particular food or ingredient.",correct: true },
        {Text:"an overreaction of the immune system to a particular food.", correct: false},
        {Text:"Disliking certain odors of food.", correct: false},
                    ]},
        {
        question:"By the law, When do you need to provide/get allergen information?",
        answers: [
            {Text:"Only before purchasing.",correct: false},
            {Text:"Only when you/customer ask(s) for allergen information.",correct: false},
            {Text:"Before purchase and upon delivery or collection.",correct: true },
                   ]},
]

var advancedQuestions =[
        {
        question: "Coeliac disease is an autoimmune condition that is triggered by what?",
        answers: [
            {Text:"Dairy.",correct: false},
            {Text:"Molluscs.",correct: false},
            {Text:"Gluten.",correct: true },
                 ]},
        {
        question:"How many named food allergens are there that must be declared if they are used as an ingredient in a food product?",
        answers: [
            {Text:10,correct: false},
            {Text:14,correct: true },
            {Text:23, correct: false},
               ]},
        {
        question: "what are the signs of allergen?",
        answers: [
            {Text:"sneezing, runny nose, itchy eyes, hives, and difficulty breathing.",correct: true },
            {Text:"Sore throat, nausea or vomiting, diarrhea.",correct: false},
            {Text:"Muscle or body aches, headaches, fatigue (tiredness).",correct: false},
                ]},
        {
        question:"Where can we find Sulphur Dioxide & Sulphite substances?",
        answers: [
            {Text:"Coconut milk.",correct: false},
            {Text:"Salad dressing.",correct: false},
            {Text:"All the ubove.", correct: true },
            ]},
]
var urlParameters = new URLSearchParams(window.location.search);var level = urlParameters.get('level')

var questions

switch (level) {
    case 'beginner':
        questions = biggenersQuestions
        break
    case 'intermediate':
        questions = intermediateQuestions
        break
    case 'advanced':
        questions = advancedQuestions;
        break
    default:
}

var currentQuestionIndex = 0
var score =0

var quizStarted = false

function startGame() {
document.getElementById("startButton").style.display = "none"
document.getElementById("question-container").style.display = "block"

var buttons = document.querySelectorAll(".button")
for (var i = 0; i < buttons.length; i++) {
var button = buttons[i];
button.style.display = "block"
button.disabled = false
}

score = 0
quizStarted = true
showQuestion()
}

function showQuestion() {
var questionElement = document.getElementById("question")
var answerButtons = document.querySelectorAll(".button")

if (currentQuestionIndex < questions.length) {
questionElement.innerText = questions[currentQuestionIndex].question
var answers = questions[currentQuestionIndex].answers

for (var index = 0; index < answerButtons.length; index++) {
answerButtons[index].innerText = answers[index].Text
answerButtons[index].classList.remove("buttonCorrect", "buttonWrong")
}
} else {
questionElement.innerText = "Congratulations! You have completed the quiz."
document.getElementById("nextButton").style.display = "none";
displayScore()
}
}

function displayScore() {
var scoreElement = document.createElement("p");
scoreElement.innerText = "Your Score: " + score + " out of " + questions.length;
scoreElement.classList.add("result")
document.body.appendChild(scoreElement)
}

var startButton = document.getElementById("startButton")
startButton.addEventListener("click", startGame)

var answerButtons = document.querySelectorAll(".button")
for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function () {
        if (!quizStarted) return
        var index = Array.from(answerButtons).indexOf(this)
        if (questions[currentQuestionIndex].answers[index].correct) {
            score++;
            this.classList.add("buttonCorrect")
        } else {
            this.classList.add("buttonWrong")
        }
        currentQuestionIndex++
        showQuestion()
    })
}

var getResultButton = document.querySelector(".result")
getResultButton.addEventListener("click", displayResults)

function displayResults() {
    var scorePercentage = (score / questions.length) * 100
    var resultMessage = "Your Score: " + score + " out of " + questions.length + "<br>"
    resultMessage += "Percentage: " + scorePercentage.toFixed(2) + "%"
    var resultContainer = document.getElementById("resultContainer")
    resultContainer.textContent = resultMessage
    resultContainer.classList.remove("hide")
    getResultButton.style.display = "none"
  }

