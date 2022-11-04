var cowname = "Clicky";
var cowclicks = parseInt(localStorage.getItem("cowclicks"));
if (localStorage.getItem("cowclicks") == NaN) {
    localStorage.setItem("cowclicks", 0)
}
var cowclick = function() {
    parseInt(cowclicks += 1)
    localStorage.setItem("cowclicks", cowclicks)
}
var referesh = function() {
    var currentClicks = localStorage.getItem("cowclicks")
    document.getElementById("clicks").textContent = currentClicks;
    if (localStorage.getItem("cowclicks") == NaN) {
        localStorage.setItem("cowclicks", 0)
    }
}
setInterval(referesh,0.1)