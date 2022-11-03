var cowname = "Clicky";
var cowclicks = parseInt(localStorage.getItem("cowclicks"));
if (localStorage.getItem("cowclicks") == NaN) {
    localStorage.setItem("cowclicks", 0)
}
var cowclick = function() {
    parseInt(cowclicks += 1)
    localStorage.setItem("cowclicks", cowclicks)
}
var refereshCount = function() {
    var currentClicks = localStorage.getItem("cowclicks")
    document.getElementById("clicks").textContent = currentClicks;
}
setInterval(refereshCount,0.1)