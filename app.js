var questionData = [
    //question Array
    { //question1
        question: "what is the full form of HTML",
        options: [
            "hyper Text Maekup Language",
            "hyper Text markup language",
            "hypertat markup language",
            "hyperText markup lame"
        ],
        answer: "hyper Text markup language",
    },
    { //question2
        question: "what is the full form of CSS",
        options: [
            "Cascading Style Sheets",
            "Cascading Style Sheets",
            "Casceding Style Sheets",
            "common style sheet",
        ],
        answer: "Cascading Style Sheets",
    },
    { //question3
        question: "What does PHP stands for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],

    },
    { //question4
        question: "What does SQL stands for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
    },
    { //question 5
        question: "What year was JavaScript launched?",
        answer: "1995",
        options: ["1996", "1995", "1994", "None of the Above"],
    },

];
// console.log(questionData);
// question finish 

//  document tage in id
var questionText = document.getElementById("questionText");
var options = document.getElementById("options");
var questionCount = document.getElementById("questionCount");
var questionIndex = 0;
var score = 0;
// console.log(questionText , options , questionCount , questionIndex);

function renderQuestion() {
    if (questionIndex < questionData.length) {
        questionText.innerHTML = questionData[questionIndex].question;
        questionCount.innerHTML = `question Count ${questionIndex + 1}/${questionData.length}`;


        options.innerHTML = "";
        for (var i = 0; i < questionData[questionIndex].options.length; i++) {
            options.innerHTML += `<div class="col-12  ">
    <div class="p-2  rounded  ">
    <button onclick="checkAns('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')"
    class= "btn w-50 text-light mx-auto bg-transparent"> ${questionData[questionIndex].options[i]}</button>
    </div>
    </div>`

        }
    }
    else {
        console.log("question finish");
    }
}
renderQuestion();

function nextQuestion() {
    questionIndex++;
    renderQuestion();
}

function checkAns(userSelecedAns, correctAns) {
    if (userSelecedAns === correctAns) {
        score++;

        console.log("correct");
    } else {
        console.log("wrong");
    }
    console.log(score);
    nextQuestion();
}
// counter 
