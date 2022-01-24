
function determineIfFilterOn(){
    var filter = document.getElementById("filter-switch").checked;
    // console.log(filter);
    return document.getElementById("filter-switch").checked;
}
function determineIfAdBlockOn(){
    return document.getElementById("adblock-switch").checked;
}
function determineIfLoggingIsOn(){
    return document.getElementById("logging-switch").checked;
}
function determineIfCookieIsOn(){
    return document.getElementById("cookie-switch").checked;
}
function determineIfStatsOn(){
    var stats = document.getElementById("statistics-switch").checked;
    // console.log(stats);
    return document.getElementById("statistics-switch").checked;
}

function displayStats(){
    var stats = document.getElementById('statistics-switch');
    var displaySetting = document.getElementById('quick-stats');
    if (!determineIfStatsOn()){ //This status looks strange, but that is how it will look normal
        displaySetting.style.display = "inline";
        }
    else{
        displaySetting.style.display = "none";
    }
}
// "adblock-switch"
// "logging-switch"
// "cookie-switch"
// "statistics-switch"