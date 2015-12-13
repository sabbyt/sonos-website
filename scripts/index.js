var controls = {
  play: "http://danielxli.ddns.net:5005/play",
  pause: "http://danielxli.ddns.net:5005/pause",
  playNext: "http://danielxli.ddns.net:5005/next",
  volumeUp: "http://danielxli.ddns.net:5005/volume/+1",
  volumeDown: "http://danielxli.ddns.net:5005/volume/-1",
  zones: "http://danielxli.ddns.net:5005/zones"
}

$('#play').click(function(event){
  event.preventDefault();
  $.get(controls.play);
  console.log('play');
});

$('#pause').click(function(event){
  event.preventDefault();
  $.get(controls.pause);
  console.log('pause');
});

$('#next').click(function(event){
  event.preventDefault();
  $.get(controls.playNext);
  console.log('next');
});

$('#volumeUp').click(function(event){
  event.preventDefault();
  $.get(controls.volumeUp);
  console.log('up');
});

$('#volumeDown').click(function(event){
  event.preventDefault();
  $.get(controls.volumeDown);
  console.log('down');
});

$('.hover').on('mouseover', function(event){
  event.preventDefault();
  $(this).animate({
    opacity: 0.25,
  }, "fast", function() {
    $(this).animate({
      opacity: 1,
    }, "slow", function() {
      console.log('hover effect');
    });
  });
});

// var info = $.getJSON("http://danielxli.ddns.net:5005/zones");

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readystate == 4) {
    var stuff = JSON.parse(xhr.responseText);
  }
};
xhr.open('GET', 'http://danielxli.ddns.net:5005/zones');
xhr.send();
