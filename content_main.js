//////////////////////////////////////////////////////////
//             Ad-Block: First line of Defense
//              By: Lily Watterson (Lilygoat)
//                      v0.1
//////////////////////////////////////////////////////////

var srcNodeList = document.querySelectorAll('[src],[href],[id]');
var filez = "/block_list_master.txt";
var worklist;

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file,);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                worklist = rawFile.responseText;    
            }
        }
    }
    rawFile.send(null);
}

readTextFile("file:///D:\GitHub\Curtain\block_list_master.txt");

console.log(worklist);


