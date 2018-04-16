$(document).ready(function() {


var currentQuestion = 0;
var correct = 0;
var incorrect = 0;


var trivia = [
    {
    question: "NBA stands for what?",
    answers: ["National Basketball Association", "National Baseball Association", "National Bowling Association", "National Badminton Association"],
    correctAnswer: 0
    },

    {
    question: "How many teams are in the NBA?",
    answers: ["20", "36", "30", "24"],
    correctAnswer: 2
    },

    {
    question: "What year was the NBA founded?",
    answers: ["1952", "1961", "1946", "1950"],
    correctAnswer: 2
    },

    {
    question: "Which team has won the most Championships?",
    answers: ["Chicago Bulls", "Boston Celtics", "Los Angeles Lakers", "Charlotte Hornets"],
    correctAnswer: 1
    },

    {
    question: "Who is the current commissioner of the NBA?",
    answers: ["Walter Kennedy", "Larry O'Brien", "David Stern", "Adam Silver"],
    correctAnswer: 3
    },

    {
    question: "What city belongs to two NBA teams?",
    answers: ["New York", "Los Angeles", "Miami", "Chicago"],
    correctAnswer: 1
    },

    {
    question: "Currently, which of these cities does not have an NBA team?",
    answers: ["Seattle", "Milwaukee", "San Antonio", "Sacramento"],
    correctAnswer: 0
    },

    {
    question: "How many games are needed to win a playoff series?",
    answers: ["6", "2", "4", "1"],
    correctAnswer: 2
    },

    {
    question: "Where will the 2019 NBA All-Star Game be hosted?",
    answers: ["Cleveland", "Phoenix", "Denver", "Charlotte"],
    correctAnswer: 3
    },

    {
    question: "How many games does a team play in the regular season?",
    answers: ["75", "82", "64", "93"],
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
    
    $("#answers").html("");
    $("#correct").text("Correct: 0")
    $("#incorrect").text("Incorrect: 0")
    displayQuestion();
}


function displayQuestion() {

    if (currentQuestion < 10) {

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
    } else {
        alert("Game Over!")
        $("#question").html("")
        $("#answers").html("<div class='row'><button type='button' class='btn btn-primary startover-btn'>Start Over</button></div>")
        $("#correct").text("Correct: " + correct)
        $("#incorrect").text("Incorrect: " + incorrect)
        } 
    
    $('.answer-btn').click(function() {
                userSelect = $(this).data('index');
                checkAnswer();
            }); 
    $('.startover-btn').click(function() {
        newGame();
    });
}

function checkAnswer() {
    correctAnswer = trivia[currentQuestion].correctAnswer;

    if (userSelect == correctAnswer) {
        alert("Correct!");
        $("#answers").html("");
        correct++;
        $("#correct").text("Correct: " + correct)
    } else {
        alert("Incorrect! The correct answer is: " + trivia[currentQuestion].answers[correctAnswer]);
        $("#answers").html("");
        incorrect++;
        $("#incorrect").text("Incorrect: " + incorrect)
    }

    currentQuestion++;
    displayQuestion();

}

});


