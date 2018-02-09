$(window).load( function() {

$( '.protectopen' ).click( function() {

  var north = this.id;
  
  if ( north.indexOf('ex') > -1 ) {
    var bertrand = "baruch";
  } 
  else if ( north.indexOf('hw') > -1 ) {
    var bertrand = "gotfried";
  } 
 /* else if ( north == "hw1a" ) {
    var bertrand = "alfred";
  } 
  else if ( north == "hw2a" ) {
      var bertrand = "george";
  } 
  else if (north == "hw3a") {
      var bertrand = "gotfried";
  }
  else if (north == "hw5a") {
      var bertrand = "aristotle";
  }
 */

  var getin = prompt("Password required:","");

  if (getin == bertrand) {
    $( "#" + this.id + "hid" ).slideToggle( "slow" );
  }
  else if (getin == null || getin == '') {
    return;
  } 
  else {
    location.href = 'nope.md';
  }
});

});
