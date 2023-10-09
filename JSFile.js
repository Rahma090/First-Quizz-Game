
//we create the buttons that will open another windows for each level

//We create a function which will generate our quiz:
//quiz questions, where to put quiz,place for quiz & submit button
//we need first to create the questions of each level:
var biggenersQuestions =[
        {
        question: "what type of allergen we have in chocolate?",
        answers: {
            a:"Wheat.",
            b:"Eggs.",
            c:"All the ubove."
                 },
        correctAnswer:"c"
        },
        {
        question:"How many main food allergens are present?",
        answers: {
            a:7,
            b:9,
            c:6
                 },
        correctAnswer:"b"
        },
        {
        question: "what if you own a restuarant and a customer asks whether a food contain an allergen. ",
        answers: {
            a:"Dismiss the customer.",
            b:"Tell them that you don't know.",
            c:"Consult the allergen risk matrix."
            },
        correctAnswer:"c"
        },
        {
        question:"Which of these is a life-threatening symptom?",
        answers: {
            a:"Having itchy or raised skin.",
            b:"Vomiting.",
            c:"Having trouble swallowing or speaking."
              },
        correctAnswer:'c'
        },
]

var intermediateQuestions =[
        {
        question: "What actions should you take after purchasing a new product that contains allergens for your friends?",
        answers: {
            a:"Get the package, those with allergies will read it later.",
            b:"Dispose of the package.",
            c:"Accept it , read the ingredients & let your friends know."
                 },
        correctAnswer:"c"
        },
        {
        question:"Which one of the following allergens is often used to glaze food products?",
        answers: {
            a:"Lupin.",
            b:"Soya.",
            c:"Egg."
                 },
        correctAnswer:'c'
        },
        {
        question: "what is a food intolerance?",
        answers: {
            a:"when your body has difficulty digesting a particular food or ingredient.",
            b:"an overreaction of the immune system to a particular food.",
            c:"Disliking certain odors of food."
                },
        correctAnswer:"a"
        },
        {
        question:"By the law, When do you need to provide/get allergen information?",
        answers: {
            a:"Only before purchasing.",
            b:"Only when you/customer ask(s) for allergen information.",
            c:"Before purchase and upon delivery or collection."
                 },
        correctAnswer:"c"
        },
]

var advancedQuestions =[
        {
        question: "Coeliac disease is an autoimmune condition that is triggered by what?",
        answers: {
            a:"Dairy.",
            b:"Molluscs.",
            c:"Gluten."
                 },
        correctAnswer:"c"
        },
        {
        question:"How many named food allergens are there that must be declared if they are used as an ingredient in a food product?",
        answers: {
            a:10,
            b:14,
            c:23
            },
        correctAnswer:"b"
        },
        {
        question: "what are the signs of allergen?",
        answers: {
            a:"sneezing, runny nose, itchy eyes, hives, and difficulty breathing.",
            b:"Sore throat, nausea or vomiting, diarrhea.",
            c:"Muscle or body aches, headaches, fatigue (tiredness)."
                    },
        correctAnswer:"a"
        },
        {
        question:"Where can we find Sulphur Dioxide & Sulphite substances?",
        answers: {
            a:"Coconut milk.",
            b:"Salad dressing.",
            c:"All the ubove."
        },
        correctAnswer:"c"
    },
]

function makeQuestions(questions,quizContainer){//this function contains a nested functions to show the quiz, accept submissions, and show the results.
var output = []
for(var i=0; i<questions.length; i++){
var answers = []
// for each available answer to this question...
for(letter in questions[i].answers){
// ...add an html radio button to let the users select from the list
answers.push(
'<label>'
+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
+ letter + ': '
+ questions[i].answers[letter]
+ '</label>'
)
}
// add this question and its answers to the output
output.push(
'<div class="question">' + questions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
)
}
// finally combine our output list into one string of html and put it on the page
quizContainer.innerHTML = output.join('')
}
function makeQuestions(biggenersQuestions, quizContainer){}
function makeQuestions(intermediateQuestions, quizContainer){}
function makeQuestions(advancedQuestions, quizContainer){}


function getResults(questions,quizContainer,resultContainer){//factory function

}


//show the questions:
showQuestions(questions,quizContainer)




//click submit, display result
submitButton.onclick=function(){
showResults(questions,quizContqiner,resultContainer)//factory function
}