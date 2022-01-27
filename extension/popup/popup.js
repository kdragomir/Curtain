
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
    console.log(stats);
    return document.getElementById("statistics-switch").checked;
}

function displayStats(){
    var stats = document.getElementById('statistics-switch');
    var displaySetting = document.getElementById('quick-stats');
    if (determineIfStatsOn()){ 
        displaySetting.style.display = "none";
        }
    else{
        displaySetting.style.display = "inline";
    }
}

// "adblock-switch"
// "logging-switch"
// "cookie-switch"
// "statistics-switch"