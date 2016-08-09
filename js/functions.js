var pContainerHeight = $('.bucket-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.bucket').css({
      'transform' : 'translate('+ wScroll /90 +'%, '+ wScroll /40 +'%)'
    });

    $('.pail').css({
      'transform' : 'translate(-'+wScroll /50 +'%, 0px)'
    });

  }

  // Landing Elements
  if(wScroll > $('.projects-pics').offset().top - ($(window).height() / 1.2)) {

    $('.projects-pics figure').each(function(i){

      setTimeout(function(){
        $('.projects-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }

});
