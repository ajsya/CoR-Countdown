// function changeTimezone(date, ianatz) {

  // suppose the date is 12:00 UTC
//var invdate = new Date(date.toLocaleString('en-US', {
  //  timeZone: ianatz
 // }));

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
 // var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  //return new Date(date.getTime() - diff); // needs to substract
  
//}

// Set the date we're counting down to
//var here = new Date("Feb 21, 2021 19:34:35");
// var there = changeTimezone(here, "Europe/Paris");
// var countDownDate = new Date(there).getTime();


function sendMessage() {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/809457786739621979/CadvKq-pNS7Q5sUDs253J9p8BNyz1tpm-EVyI3US9KOOzW0SSV2F1-5g2QczdTad9P9Y"
  );
  request.setRequestHeader("Content-type", "application/json");
  var message_content = document.getElementById("Message").value;
  var username = document.getElementById("username").value;
  var params = {
    username: "Live Countdown",
    avatar_url: "",
    content: message_content
  };
  request.send(JSON.stringify(params));
  alert("Message Sent!")
}

var countDownDate = new Date("Feb 21, 2022 19:34:35 EST").getTime();

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
