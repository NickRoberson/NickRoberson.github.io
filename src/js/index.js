
// variables 
var offset = -30;
var scrollTime = 1200;
var animationRunning = true;
var animationHTML = "";

// init
run();

// init function
function run() {

  // setup click handlers 
  $("#aboutLink").click(function() {
    console.log("Navigating to about tab . . .");
    $('html, body').animate({
        scrollTop: $("#about").offset().top + offset
    }, scrollTime);
  });

  $("#experienceLink").click(function() {
    console.log("Navigating to work tab . . .");
    $('html, body').animate({
        scrollTop: $("#experience").offset().top + offset
    }, scrollTime);
  });

  $("#skillsLink").click(function() {
    console.log("Navigating to skills tab . . .");
    $('html, body').animate({
        scrollTop: $("#skills").offset().top + offset
    }, scrollTime);
  });

  $("#interestsLink").click(function() {
    console.log("Navigating to interests tab . . .");
    $('html, body').animate({
        scrollTop: $("#interests").offset().top + offset
    }, scrollTime);
  });

  $("#contactLink").click(function() {
    console.log("Navigating to interests tab . . .");
    $('html, body').animate({
        scrollTop: $("#contact").offset().top + offset
    }, scrollTime);
  });

  $('#disable').click(function() {
    if(animationRunning) {
      $('#bg-canvas').hide();
      $('#disable').text('Enable Animation');
      animationRunning = false;
    } else {
      animationRunning = true;
      $('#bg-canvas').show();
      $('#disable').text('Disable Animation');
    }
  })
}

var correctCaptcha = function(response) {
  console.log(response);
};
