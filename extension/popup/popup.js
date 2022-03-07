
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
// This function call serves, to call the display stats function which is supposed to trigger the stats being displayed or Not
//document.getElementById('statistics-switch').addEventListener("click",displayStats());
document.addEventListener("click",displayStats());

function displayStats(){
    var stats = document.getElementById('statistics-switch');
    var displaySetting = document.getElementById('quick-stats');  //To reference the quick stats element which is to be displayed or not.
    if (determineIfStatsOn()){  //This looks strange, but because the switch itself is a "checkbox" if it is "active", then it will return False
        displaySetting.style.display = "none"; //So since it is "checked" it becomes unactive, also we have come to an consensus that the options in the popup menu will be "active" by default
        } 
    else{
        displaySetting.style.display = "inline";
    }
}

// "adblock-switch"
// "logging-switch"
// "cookie-switch"
// "statistics-switch"