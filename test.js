function changeTimezone(date, ianatz) {

  // suppose the date is 12:00 UTC
  var invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff); // needs to substract
  
}

// E.g.
var here = new Date("Feb 21, 2021 19:34:35");
var there = changeTimezone(here, "Europe/Paris");
document.getElementById("message").innerHTML = there;

console.log(`Here: ${here.toString()}\nToronto: ${there.toString()}`);

