jQuery('.coming-soon').imagesLoaded( { background: true }, function() {
  $('.dark').fadeOut('1000');
  $('#stroke').attr("class", "stroke stroke-anim")
  $('#fill').attr("class", "fill fill-anim")
  $('.text').addClass('text-anim');
  console.log('Hey!');
});
