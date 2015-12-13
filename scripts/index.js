var controls = {
  play: "http://danielxli.ddns.net:5005/play",
  pause: "http://danielxli.ddns.net:5005/pause",
  playNext: "http://danielxli.ddns.net:5005/next",
  volumeUp: "http://danielxli.ddns.net:5005/volume/+1",
  volumeDown: "http://danielxli.ddns.net:5005/volume/-1",
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

var nowPlaying;
var consoleInfo = function() {
$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://danielxli.ddns.net:5005/state') + '&callback=?', function(data){
  var nowPlayingString = data.contents;
  nowPlaying = JSON.parse(nowPlayingString);
}).done(function(){
  $('#status').html(nowPlaying.currentTrack.title + " by " + nowPlaying.currentTrack.artist);
});
};

function refresh() {
  var timeoutID = window.setTimeout(refresh, 10000);
  consoleInfo();
  console.log('refresh');
}
