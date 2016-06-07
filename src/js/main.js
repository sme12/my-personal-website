$('header').imagesLoaded( { background: true }, function() {
  $('.cover').fadeOut('1000');
  // $('#stroke').attr("class", "stroke stroke-anim")
  // $('#fill').attr("class", "fill fill-anim")
  // $('.text').addClass('text-anim');
  // console.log('Hey!');
});

$('.hamb').click( function() {
  $(this).toggleClass('is-open');
  $('nav').toggleClass('is-open');
} );
