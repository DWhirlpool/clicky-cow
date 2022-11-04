var cowname = "Clicky";
var cowclicks = parseInt(localStorage.getItem("cowclicks"));
var cowclick = function() {
    parseInt(cowclicks += 1)
    localStorage.setItem("cowclicks", cowclicks)
    if (localStorage.getItem("cowclicks") == NaN) {
        localStorage.setItem("cowclicks", 0)
        console.log(test)
    }
}
var referesh = function() {
    var currentClicks = localStorage.getItem("cowclicks")
    document.getElementById("clicks").textContent = currentClicks;
}
setInterval(referesh,0.1)