var cowname = "Clicky";
var cowclicks = 0
var cowclick = function() {
    parseInt(cowclicks += 0.00364963504)
    localStorage.setItem("cowclicks", parseInt(localStorage.getItem("cowclicks")) + cowclicks)
}
var referesh = function() {
    var currentClicks = localStorage.getItem("cowclicks")
    document.getElementById("clicks").textContent = currentClicks;
}
setInterval(referesh,0.1)