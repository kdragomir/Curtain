//save eveything as strings and parse it back use set and get use json.stringfy
// json.parse()

function determineIfFilterOn(){
    var filter = document.getElementById("filter-switch").checked;
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
    if (localStorage.getItem('stats').valueOf()){
        var statistics = document.getElementById("statistics-switch").checked;
        console.log('hey there was a value of false, which is now intializing the stats switch');
    }
    else{
        var statistics = localStorage.getItem('stats');
        console.log('this is using the supposed stored data');        
    }
    // localStorage.setItem('stats', statistics);
    // console.log(localStorage.getItem('stats'));
    // document.body.append(statistics);
    return localStorage.getItem('stats');
}
// This function call serves, to call the display stats function which is supposed to trigger the stats being displayed or Not
var stats = document.getElementById('statistics-switch');
if(stats) {
    document.getElementById('statistics-switch').addEventListener("click",displayStats());
}

var settings = document.getElementById('settings-icon');

if(settings){
    document.getElementById('settings-icon').addEventListener("click",displayStats());
    chrome.storage.local.get()
}
//document.getElementById("settings-icon").addEventListener("click",popoutSettings());

function displayStats(){
    var stats = localStorage.getItem('stats');
    var displaySetting = document.getElementById('quick-stats');  //To reference the quick stats element which is to be displayed or not.
    if (determineIfStatsOn().valueOf()){  //This looks strange, but because the switch itself is a "checkbox" if it is "active", then it will return False
        displaySetting.style.display = "inline"; //So since it is "checked" it becomes unactive, also we have come to an consensus that the options in the popup menu will be "active" by default
    } 
    else{
        displaySetting.style.display = "none";
        displaySetting.setAttribute(displaySetting.style.display = "none")
    }
}

// function popoutSettings    
//     chrome.tabs.create({'url':"chrome://newtab"});

// "adblock-switch"
// "logging-switch"
// "cookie-switch"
// "statistics-switch"