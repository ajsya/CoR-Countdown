document.getElementById("music").innerHTML = "Music Off";

function music() {
  var audio = new Audio('kahoot.wav');
  audio.loop = true;
  audio.play();
  document.getElementById("music").innerHTML = "Music On";
}