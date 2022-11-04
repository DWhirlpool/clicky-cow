var cowname = "Clicky";
var cowclicks = parseInt(localStorage.getItem("cowclicks"))
var cowclick = function() {
    localStorage.setItem("cowclicks", cowclicks += 1)
}
var referesh = function() {
    var currentClicks = localStorage.getItem("cowclicks")
    document.getElementById("clicks").textContent = currentClicks;
}
setInterval(referesh,0.1)