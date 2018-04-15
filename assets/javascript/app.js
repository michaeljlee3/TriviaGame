$(document).ready(function() {

var currentQuestion = 0;
var correct = 0;
var incorrect = 0;


var trivia = [
    {
    question: "Question 1?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 0
    },

    {
    question: "Question 2?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 1
    },

    {
    question: "Question 3?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 2
    },

    {
    question: "Question 4?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 3
    },

    {
    question: "Question 5?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 2
    },

    {
    question: "Question 6?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 1
    },

    {
    question: "Question 7?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 0
    },

    {
    question: "Question 8?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 3
    },

    {
    question: "Question 9?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 2
    },

    {
    question: "Question 10?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correctAnswer: 1
    },
]

$("#start-button").on("click", function(){
    $(this).hide();
    newGame();
});

function newGame() {
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    displayQuestion();
}

function displayQuestion() {

    switch (currentQuestion) {
        
        case currentQuestion = 0: 
            $("#question").text(trivia[0].question);
            for (i = 0; i < trivia[0].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[0].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 1: 
            $("#question").text(trivia[1].question);
            for (i = 0; i < trivia[1].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[1].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 2: 
            $("#question").text(trivia[2].question);
            for (i = 0; i < trivia[2].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[2].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 3: 
            $("#question").text(trivia[3].question);
            for (i = 0; i < trivia[3].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[3].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 4: 
            $("#question").text(trivia[4].question);
            for (i = 0; i < trivia[4].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[4].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 5: 
            $("#question").text(trivia[5].question);
            for (i = 0; i < trivia[5].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[5].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 6: 
            $("#question").text(trivia[6].question);
            for (i = 0; i < trivia[6].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[6].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 7: 
            $("#question").text(trivia[7].question);
            for (i = 0; i < trivia[7].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[7].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 8: 
            $("#question").text(trivia[8].question);
            for (i = 0; i < trivia[8].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[8].answers[i] + "</button></div>")
            }
            break;

        case currentQuestion = 9: 
            $("#question").text(trivia[9].question);
            for (i = 0; i < trivia[9].answers.length; i++) {
            $("#answers").append("<div class='row'><button type='button' class='btn btn-primary answer-btn' data-index='" + i + "'>" + trivia[9].answers[i] + "</button></div>")
            }
            break;
    }

    $('.answer-btn').click(function() {
        userSelect = $(this).data('index');
        checkAnswer();
    });
    
}   

function checkAnswer() {
    correctAnswer = trivia[currentQuestion].correctAnswer;

    if (userSelect == correctAnswer) {
        alert("Correct!");
        $("#answers").html("")
        
    } else {
        alert("Incorrect!")
        $("#answers").html("")
    }

    currentQuestion++;
    displayQuestion();

}



});


