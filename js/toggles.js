$(document).ready( function() {

  /* Toggle the Table of contents */

  $( ".open" ).click( function() {

    $( this).next( ".hideable" ).slideToggle( "slow" );

  });


  $( ".open" ).click( function() {

    $(this).next( ".hid" ).slideToggle( "slow" );

    $(this).toggleClass("blue");

  }); 

  $( ".open" ).click( function() {

    var bit = "#" + this.id + "hid";
    $( "#" + this.id + "hid" ).slideToggle( "slow" );

  });
 

  /* Scroll to top of the page */

  $(window).scroll(function(){ 
 
    var winTop = $(window).scrollTop(),
        winHeight = $(window).height(); 

    if (winTop > winHeight) {
      $(".totop").css("display","block");
    }
    else {
      $(".totop").css("display","none");
    }
  });

  $(".totop").click(function() {

    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;

  });

});
