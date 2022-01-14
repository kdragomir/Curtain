var switchStatus = false
var filterSwitchElement= document.getElementById("filter-switch")
function determineIfFilterOn(){
    var filterSwitchElement = document.getElementById("filter-switch")
    if(filterSwitchElement.checked){
        switchStatus = filterSwitchElement.is(':checked');
        alert(switchStatus)
    }
}
// $("#filter-switch").on('change', function(){
//     if(($this).is(':checked')){
//         switchStatus = $(this.is(':checked'));
//         alert(switchStatus); //Verfifies status in the window
//     }
//     else{
//         switchStatus = $(this).is(':checked');
//         alert(switchStatus);//verifies
//     }  
// });

// "adblock-switch"
// "logging-switch"
// "cookie-switch"
// "statistics-switch"