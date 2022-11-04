var cowname = "Clicky";
var cowclicks = 1
var cowclick = function() {
    localStorage.setItem("cowclicks", parseInt(localStorage.getItem("cowclicks")) + cowclicks)
}
var referesh = function() {
    var currentClicks = localStorage.getItem("cowclicks")
    document.getElementById("clicks").textContent = currentClicks;
}
setInterval(referesh,0.1)