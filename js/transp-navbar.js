
  // Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 50) 
    {
        $('.transp-navbar').addClass('transp');
    } else {
        $('.transp-navbar').removeClass('transp');
    }
});