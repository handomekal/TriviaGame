$(document).ready(function() {

    $("image").append("display", "none");

    var timerNumber = 25;

    var numCorrect = 0;
    var numIncorrect = 0;
    var numAnswered = 0;

    var answers = [];
    var currentQuestion = 0;

    var trivia = [
        q1 = {
			question: "Which Person was the 44th President?",
			correct: 2,
			multChoice: ["Dick Cheney", "Barack Obama", "Geroge Bush", "Joe Biden"],
			
		},
		q2 = {
			question: "What color is a Tomato?",
			correct: 1,
			multChoice: ["Red", "Green", "Purple", "Blue"],
			
		},
		q3 = {
			question: "How many states are in North America",
			correct: 3,
			multChoice: ["49", "36", "50", "51"],
			
		},
		q4 = {
			question: "Which NBA franchise has the most championship titles?",
			correct: 0,
			multChoice: ["Celtics", "Lakers", "Warriors", "Spurs"],
			
		},
		q5 = {
			question: "How many inches are in a foot?",
			correct: 0,
			multChoice: ["12", "10", "9", "11"],
            
        },    
        
    ];

    var hide = function (elementId) {
        $(elementId).append("visibility", "visible");
    };
    var show = function (elementId) {
        $(elementId).append("visibility", "visible");
    };
    var write = function (elementId, thing) {
        $(elementId).append("<h3>" + thing + "</h3>")
    };

    var questionWrite = function () {
        if (currentQuestion <= 7) {
            $("#questionDiv").append("<h2>" + trivia[currentQuestion].question + "</h2>");
            answers = trivia[currentQuestion].multChoice;
            show(".answer");
            for (var i = 0; i < answers.length; i++) {
                $("#answer" + i).append("<h3>" + answers[i] + "</h3>")
            }
        }
        else {
            gameOver();
        }
    };

    var answerClear = function () {
        for (var i = 0; i < 4; i++) {
            $("#answer" + i).append("");
        }
        hide(".answer")
    };

    var start = function() {
        counter = setInterval(countdown, 1000);
        questionWrite();
    };

    var clearScreen = function () {
        $("#questionDiv").empty();
        $("#scoreDiv").empty();
        answerClear();
    }

    var countDown = function () {
        timerNumber --;
        $("#timerDiv").html("<h2> Time Remaining: " + timerNumber + "</h2>");
         if (timerNumber == 0) {
             gameOver();
         }
    };
    var stop = function () {
		clearInterval(counter);
    };
    var reset = function () {
		stop();
		timerNumber = 25;
		answers = [];
		currentQuestion = 0;
		clearScreen();
		$('#timerDiv').empty();
		show('#start');
		hide('#reset');
    };
    var gameOver = function() {
        stop();
        clearScreen();
    };
    write("#startTitle", "<h3>Game Over!</h3>");
    $("#scoreDiv").append("<h3>Here are your results</h3>");
    $("#scoreDiv").append("<h3>Total question answered: " + numAnswered + "</h3>");
    $("#scoreDiv").append("<h3>Number of correct answers: " + numCorrect + "</h3>");
    $("#scoreDiv").append("<h3>Number of incorrect answers: " + numIncorrect + "</h3>");

    var nextQuestion = function () {
        $("#image").append("display", "none");
		$("#questionDiv").append("display", "initial");
		$("#answersDiv").append("display", "initial");
		$("#answerMsg").append("display", "none");
		clearInterval();
		timerNumber = 25;
    }
    $('.answer').click(function () {
		var clicked = $(this);
		var value = clicked.attr('value');
		var correctAnswer = trivia[currentQuestion].correct;

		if (value == correctAnswer) {
			$("#questionDiv").empty();
			answerClear();
			$("#answersDiv").append("display", "none");
			$("#questionDiv").append("display", "none");
			$("#answerMsg").append("display", "initial");
			$("#image").attr("src", trivia[currentQuestion].gif);
			$("#image").append("display", "initial");
			$("#answerMsg").append("<h3> You chose " + answers[value] + ".</h3> <br><h3>The correct answer was" + answers[correctAnswer] + ".</h3>");
			setInterval(nextQuestion, 5 * 1000);
			numAnswered ++;
			numCorrect ++;
			currentQuestion ++;
			questionWrite();
		}
		else {
			numAnswered ++;
			numIncorrect ++;
			currentQuestion ++;
			timerNumber = 31;
			$("#questionDiv").empty();
			answerClear();
			questionWrite();
		}
    });
   

})