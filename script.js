var countDownDate = new Date("Feb 23, 2022 1:34:35 UTC").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // document.getElementById("distance").innerHTML = distance;
  
  // Send Discord Webhook Update
  if (minutes = 4) {
    var message_content="f"
    sendMessage()
  }
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy Birthday Chair of Republic!";
    document.getElementById("message").innerHTML = "Congratulations! You're now a toddler Chair of Republic!";
  }
}, 1000);
