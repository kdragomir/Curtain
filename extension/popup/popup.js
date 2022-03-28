var filterSwitch = document.getElementById("filter-switch");
var adblockSwitch = document.getElementById("adblock-switch");
var cookieSwitch = document.getElementById("cookie-switch");
var loggingSwitch = document.getElementById("logging-switch");
var statisticsSwitch = document.getElementById("statistics-switch");
var quickStats = document.getElementById("quick-stats");
this.statisticsSwitch.addEventListener("change", toggleQuickStats);

function toggleQuickStats() {
    if (statisticsSwitch.checked) {
        quickStats.style.display = "block";
    } else {
        quickStats.style.display = "none";
    }
}
