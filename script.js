$(function(){
    $("#navigation").load("navigation.html"); 
  });



  $(function(){
    $("#footer").load("footer.html"); 
  });

  $(function(){
    $("#new").load("new.html"); 
  });



  $(function(){
    $("#earring").load("earrings.html"); 
  });

  $(function(){
    $("#classic").load("classics.html"); 
  });
  


    $(function(){
    $("#wares").load("wares.html"); 
  });

  $(function(){
    $("#art").load("art.html"); 
  });

  $(function(){
    $("#testproduct1").load("products/testproduct1.html"); 
  });

  $(function(){
    $("#testproduct2").load("products/testproduct2.html"); 
  });



  $(function(){
    $("#testproduct3").load("products/testproduct3.html"); 
  });



  

// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);

$(function() {

    // your current click function
    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });

    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: `${$(window.location.hash).offset().top + 350}px`
        }, 1000, 'swing');
    }

});
 