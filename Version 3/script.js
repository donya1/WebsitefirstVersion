$('#explore').click(function() {
  $('body').removeClass('hidden');
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".Content").offset().top 
  }, 2000);
  $('#explore').fadeOut(3000,'swing');
});




