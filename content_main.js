//////////////////////////////////////////////////////////
//             Ad-Block: First line of Defense
//              By: Lily Watterson (Lilygoat)
//                      v0.1
//////////////////////////////////////////////////////////

var srcNodeList = document.querySelectorAll('[src],[href]');
readF("block_list_master.txt")

console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" + srcNodeList.length);

/* for (var i = 0; i < srcNodeList.length; ++i)
{
    var obj = srcNodeList[i];
    
    testStringarr.array.forEach(element => 
    {




        var testString = element;
        if(obj.getAttribute('src') == testString || obj.getAttribute('href') == testString)
        {
            //obj.remove();
            console.log("Thing Tested");
        }
    });
    
} */

function readF(filepath)
{
    var reader = new FileReader();
    var x = new Blob(filepath,{type:'text/plain'});

    reader.readAsDataURL(filepath);
}