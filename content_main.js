//////////////////////////////////////////////////////////
//             Ad-Block: First line of Defense
//              By: Lily Watterson (Lilygoat)
//                      v0.1
//////////////////////////////////////////////////////////

var srcNodeList = document.querySelectorAll('[src],[href]');

for (var i = 0; i < srcNodeList.length; ++i)
{
    var obj = srcNodeList[i];
    var testString = "gamergirlpee"

    if(obj.getAttribute('src') == testString)
    {
        obj.remove();
    }
}