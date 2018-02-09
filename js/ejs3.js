$(document).ready(function(){ 

  $(window).scroll(function(){ 
 
    var winTop = $(window).scrollTop(),
        winHeight = $(window).height(); 

    if (winTop > winHeight) {
      $("#totop").css("display","block");
      $("#banner").css("display","block");
    }
    else {
      $("#totop").css("display","none");
      $("#banner").css("display","none");
    }
  });
 
$("#totop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1500);
  return false;
});

$(".abs").click(function() {
  $("#abs-"+this.name).slideToggle("slow");
});

});
