'use stict';

$(document).ready(function() {
  var $container = $('.container');
  var $body = $('body');
  // var category;
  var arrayColors = ['#54E7FE', '#8A65B7', '#FF353D', '#FF8A27', '#FFFF00',
   '#01B230', '#7F9DB7', '#153A40','#54E7FE', '#8A65B7', '#FF353D', '#FF8A27',
   '#FFFF00', '#01B230', '#7F9DB7', '#153A40'];
  var arrayNumbers =
    ['1', '2', '3', '4', '5', '6', '7', '8',
    '1', '2', '3', '4', '5', '6', '7', '8'];
  var arrayLetters = ['B', 'I', 'A', 'N', 'C', 'O', 'R',
   'G','B', 'I', 'A', 'N', 'C', 'O', 'R', 'G'];
  var arrayPrrrr = ['url(images/1.jpg)','url(images/2.jpg)','url(images/3.jpg)',
    'url(images/4.jpg)','url(images/5.jpg)','url(images/6.jpg)',
    'url(images/7.jpg)','url(images/8.jpg)','url(images/1.jpg)',
    'url(images/2.jpg)','url(images/3.jpg)','url(images/4.jpg)',
    'url(images/5.jpg)','url(images/6.jpg)','url(images/7.jpg)',
    'url(images/8.jpg)'];
  var userSelection = (shuffle(arrayColors));
  var numberOfTries;
  var tilesMatched = 0;
  var $onOff = $('.onOff');

  init();

  //Functions____________________________________________

  //Shuffle array
  function shuffle(arr) {
    arr.sort(function() { return 0.5 - Math.random(); });
    return arr;
  };

  //Start the game
  function init() {
    var numberOfCells = userSelection.length;
    shuffle(userSelection);
    buildBoard(($container), numberOfCells);
    numberOfTries = -1;
    tries();
  }

  //Build board
  function buildBoard(element, cells) {
    element.empty();
    for (var i = 0; i < cells; i++) {
      element.append('<div class="cell" id="' + (i + 1) +
        '" data-colour=' + userSelection[i] +
        '></div>'
      );
    }
  };

  //modify div after comparing
  function afterComparing(element) {
    $body.css('pointer-events', 'inherit');
    $(element).removeAttr('style').removeClass('selected').html('');
  }

  //modify div when cells are matched
  function ifMatched(element) {
    afterComparing(element);
    sound('two');
    $(element).addClass('matched')
              .click(false);
  }

  //keep count of tries and display it
  function tries() {
    numberOfTries++;
    $t = $('.t');
    $s = $('.s');
    $score = $('.score');
    // var one = '<div class="tries s"> try </div>';
    // var one = '<div class="tries s"> try </div>';
    var one = 'try';
    var more = 'tries';
    // var numT = '<div class="tries t">' + numberOfTries + '</div>';
    var numT = numberOfTries;
    numberOfTries > 1 || numberOfTries === 0 ? $s.html(more) : $s.html(one) ;
    $t.html(numT);
  }

  //determine game is over
  function isItOver() {
    // var ttt = $('.container').has('.matched').length;
    console.log('ttt', tilesMatched);
    $('.container').children().each(function(index, element) {
      console.log($(element).hasClass('matched').length);
      // tilesMatched === (userSelection - 2) * 7 ? console.log('won') : '';
      // element.hasClass('.matched') ? console.log('has' + index) : '';
    });
    // $('.container').append('<div>' +
    // ($('.container').has('.matched').length === userSelection.length ? 'yes' : '') + '</div>');
    // $(".container div").each(function(index, element) {
      // console.log('zapato');
      // console.log($(element));
      // if ($(element).hasClass(".matched")) {
          // console.log('game won!');
      // }
    // });
    // if ($('.container > .matched').length > 1) {
    //   console.log('game won!');
    // }
  };

  console.log(userSelection.length);
  // if ($("#gallery > div.show").length > 0)
  // if($('#popup').children('p.filled-text').length > 0) {
  // console.log("Found");

  //compareCells
  function compareCells(a, b) {
    if ((a[0].id !== b[0].id) &&
       (!a.hasClass('matched') || !b.hasClass('matched'))) {
      if (a.data('colour') === b.data('colour')) {
        setTimeout(function() {
          ifMatched(a);
          ifMatched(b);
        }, 100);
      } else {
        setTimeout(function() {
          afterComparing(a);
          afterComparing(b);
        }, 400);
      }
    } else {
      setTimeout(function() {
        afterComparing(a);
        afterComparing(b);
      }, 100);
    }
    tries();
    isItOver();
  };

  //play sound when clicking title
  function sound(bubb) {
    var audio = new Audio('./sounds/bubble_' + bubb + '.mp3');
    $onOff.hasClass('.soundOff') ? '' : audio.play();
  }

  //Listeners ____________________________________________

  //choose type of tyle on selection
  $('button').on('click', function(event) {
    if (event.target.id === 'arrayColors') {
      userSelection = arrayColors;
    } else if (event.target.id === 'arrayNumbers') {
      userSelection = arrayNumbers;
    } else {
      userSelection = arrayLetters;
    };
    init();
  });

  //add class to toggle sound on/off
  // function onOff() {
  $('.onOff').on('click', function() {
    var iconOff = '<img src="./images/vol_off.svg" alt="">sound';
    var iconOn = '<img src="./images/vol_on.svg" alt="">sound';
    $onOff.toggleClass('.soundOff');
    $onOff.hasClass('.soundOff') ? $onOff.html(iconOff) : $onOff.html(iconOn);
  });
  // }

  //assign colours to cells
  $container.on('click', '.cell', function(event) {
    var $cell = $(this);
    var color = $cell.data('colour');
    var $selectedCell = $('.cell.selected').first();
    sound('one');
    if (userSelection === arrayColors) {
      $cell.css('background-color', color).addClass('selected'); //to use colours
    } else {
      $cell.html(color).addClass('selected');//to use with numbers or text
    }
    if ($selectedCell.length > 0) {
      compareCells($selectedCell, $cell);
      $body.css('pointer-events', 'none');
    }
  });
});

/* to do
winning weeee
number of tries
some kind of wee when a pais is made

*/
