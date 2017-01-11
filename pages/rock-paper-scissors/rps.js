var userScore = 0;
var compScore = 0;

$(document).ready(function(){
	$('.circle_rock').click(function() {
		var userChoice = "rock";
		play(userChoice);
	})

	$('.circle_paper').click(function() {
		var userChoice = "paper";
		play(userChoice);
	})

	$('.circle_scissors').click(function() {
		var userChoice = "scissors";
		play(userChoice);
	})

	$('.bottom_rectangle').click(function() {
		resetGame();
	})
});

// Prints the scoreboard to the screen
var scoreBoard = function() {
	$('.top_rectangle').empty();
	$('.top_rectangle').append('User Score: ' + userScore + ('<br>') + 'Computer Score: ' + compScore);
}

// Clears the middle rectangle, preparing it for the new score
var clearMiddleRectangle = function() {
	$('.middle_rectangle').empty().append('CHOICES AND RESULTS' + ('<br>'));
}

// Clears the top rectangle, preparing it for the new score
var clearTopRectangle = function() {
	$('.top_rectangle').empty().append('SCORE' + ('<br>'));
}

// Clears the score
var resetGame = function() {
	userScore = 0;
	compScore = 0;
	clearTopRectangle();
	clearMiddleRectangle();
}

// sets the game in motion.  clears the score, computes the computer choice, prints the choices and prints the scoreboard
var play = function(userChoice) {
	clearMiddleRectangle();
	var computerChoice = computerPick();
	$('.middle_rectangle').append('User chooses: ' + userChoice + ('<br>')
	+ 'Computer chooses: ' + computerChoice + ('<br>')
	+ compare(userChoice, computerChoice));
	scoreBoard();
}

// chooses either rock, paper or scissors for the computer
var computerPick = function() {
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		return("rock");
	} else if(computerChoice <= 0.67) {
		return("paper");
	} else {
		return("scissors");
	}
};

// compares computer and user choices, updates the score variables and returns the winner
var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return("The result is a Tie!");
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
						userScore++;
						return("ROCK WINS!");
        } else {
						compScore++;
            return("PAPER WINS!");
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
						userScore++;
            return("PAPER WINS!");
        } else {
						compScore++;
            return("SCISSORS WINS!");
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "rock") {
						compScore++;
            return("ROCK WINS!");
        } else {
						userScore++;
            return("SCISSORS WINS!");
        }
    }
}
