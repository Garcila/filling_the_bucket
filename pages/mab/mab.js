$(document).ready(function(){
	$(document).on('click', '.bananas1',function(e) {
    $('.text_answer').empty();
    $(function () {
      $.ajax( {
        url: 'http://cors.io/?u=http://quotes.stormconsultancy.co.uk/random.json',
        dataType: 'json',
        method: 'GET'
      }).done(function (json) {
          $('.text_answer').append(json.quote) //add if you want to have authors: + "<p>&mdash;" + json.author +"</p>")
          });
     });
   });
});

// the following commented are contains local answers method

$(document).ready(function(){
	$('.image_button').click(function() {
    $('.answer_8').empty();
    $('.answer_8').append(magicBallanswer);
  })

	$('.image_button_clear').click(function() {
    $('.answer_8').empty();
    $('.answer_8').append("Ape's Magic 8 ball answers...");
		$('.question_box').val('');
  })

	$('.question_box').keypress(function(e) {
		if(e.which == 13) {
			$('.answer_8').empty();
	    $('.answer_8').append(magicBallanswer);
	  }
	});
});

function magicBallanswer() {
	var apeAnswers = ["It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes, definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"];
	var random = apeAnswers[Math.floor(Math.random() * apeAnswers.length)];
	return random;
	}
