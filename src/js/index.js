
// variables 
var offset = -30;
var scrollTime = 1200;
var animationRunning = true;

// init
run();

// init function
function run() {
  $('#contact-info').hide();

  // setup click handlers 
  $("#introLink").click(function() {
    console.log("Navigating to intro tab . . .");
    $('html, body').animate({
        scrollTop: $("#intro").offset().top + offset
    }, scrollTime);
  });

  $("#aboutLink").click(function() {
    console.log("Navigating to about tab . . .");
    $('html, body').animate({
        scrollTop: $("#about").offset().top + offset
    }, scrollTime);
  });

  $("#resumeLink").click(function() {
    console.log("Navigating to resume tab . . .");
    $('html, body').animate({
        scrollTop: $("#resume").offset().top + offset
    }, scrollTime);
  });

  $("#interestsLink").click(function() {
    console.log("Navigating to interests tab . . .");
    $('html, body').animate({
        scrollTop: $("#interests").offset().top + offset
    }, scrollTime);
  });

  $("#projectsLink").click(function() {
    console.log("Navigating to projects tab . . .");
    $('html, body').animate({
        scrollTop: $("#projects").offset().top + offset
    }, scrollTime);
  });

  $("#contactLink").click(function() {
    console.log("Navigating to contact tab . . .");
    $('html, body').animate({
        scrollTop: $("#contact").offset().top + offset
    }, scrollTime);
  });

  $('#disable').click(function() {
    if(animationRunning) {
      $('#bg-canvas').hide();
      $('#disable').text('Enable Animation');
      $('#body').css("background","#ffffff");
      animationRunning = false;
    } else {
      animationRunning = true;
      $('#bg-canvas').show();
      $('#disable').text('Disable Animation');
      $('#body').css("background","#ffffff");
    }
  });

  $("#website").click(function() {
    console.log("Navigating to projects tab . . .");
    $('html, body').animate({
        scrollTop: $("#projects").offset().top + offset
    }, scrollTime);
  });
}

var correctCaptcha = function(response) {
  $('#recaptcha').hide();
  $('#contact-info').show();
  console.log(response);
};
