//////////////////////////////////////////////////////////
//             Ad-Block: First line of Defense
//              By: Lily Watterson (Lilygoat)
//                      v0.1
//////////////////////////////////////////////////////////

var srcNodeList = document.querySelectorAll('[src],[href],[id]');
var worklist;

function readTextFile(file)
{
    console.log("Readtextfile called");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
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
                console.log(worklist);
                splitandtesttext(worklist);
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

    for (var i = 0; i < srcNodeList.length; ++i)
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
    }
}

readTextFile("http://curtain.lilywattersongames.com/block_list_master.txt");






