var switchStatus = false
// document.getElementById("filter-switch")
$("#filter-switch").on('change', function(){
    if(($this).is(':checked')){
        switchStatus = $(this.is(':checked'));
        alert(switchStatus); //Verfifies status in the window
    }
    else{
        switchStatus = $(this).is(':checked');
        alert(switchStatus);//verifies
    }  
});

// "adblock-switch"
// "logging-switch"
// "cookie-switch"
// "statistics-switch"