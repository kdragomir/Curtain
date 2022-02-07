//////////////////////////////////////////////////////////
//             Ad-Block: First line of Defense
//              By: Lily Watterson (Lilygoat)
//                      v0.1
//////////////////////////////////////////////////////////

var srcNodeList = document.querySelectorAll('[src],[href],[id]');
var worklist;

function readTextFile(file)
{
    var fr = new FileReader();
    console.log(fr.readAsText(file instanceof Blob));
    console.log("Readtextfile called");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        //console.log("Start func");
        console.log(rawFile.readyState.toString());

        if(rawFile.readyState === XMLHttpRequest.DONE)
        {
            if(rawFile.responseText != null)
            {
                //console.log("Fuckin A right dsafafa");
                worklist = rawFile.responseText;
                ScrapeandScour(worklist);
                //console.log(worklist);
                //splitandtesttext(worklist);
            }
            else
            {
                //console.log("Fuckin B wrong dsfaasd");
            }
        }
    }
    rawFile.send();
}


 function splitandtesttext(masstext)
{
    var testtext = masstext.split("\n");
    return testtext;

    /* for (var i = 0; i < srcNodeList.length; ++i)
    {
        for (var g = 0; g < testtext.length; ++g)
        {
            var obj = srcNodeList[i];
            var testString = testtext[g].split("") - testtext[g].split("")

            if(obj.getAttribute('src') == testString)
            {
                obj.remove();
            }
        }
    } */

    
} 

function ScrapeandScour(testlist)
{
    var all = document.getElementsByTagName("*");
    var key = splitandtesttext(testlist);
    console.log(key.toString());


    /* for (var i=0, max=all.length; i < max; i++) {
        for(var x=0, max2=key.length; x<max2; x++)
        {
            
            if(all[i].outerHTML.includes(key[x]))
            {
                console.log(i + " includes " + x);
                //all[i].setAttribute("style", "display: none !important;");
                //console.log("Caught One");
            }
        }
    } */
}



readTextFile("block_list_master.txt");






