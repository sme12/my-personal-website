$('header').imagesLoaded( { background: true }, function() {
  $('.cover').fadeOut('1000');
  // $('#stroke').attr("class", "stroke stroke-anim")
  // $('#fill').attr("class", "fill fill-anim")
  // $('.text').addClass('text-anim');
  // console.log('Hey!');
});

$('.hamb').click( function() {
  $('.hamb').toggleClass('is-open');
  $('nav').toggleClass('is-open');
} );

$('nav ul li a').click( function() {
  $('.hamb').removeClass('is-open');
  $('nav').removeClass('is-open');
} );

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
var wScroll = $(this).scrollTop();

if(wScroll > $('.about').offset().top - 2 )  {

    $('.arrow-up').addClass('is-showing');

    } else {
      $('.arrow-up').removeClass('is-showing');
    }

  });
