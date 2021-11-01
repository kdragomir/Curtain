//////////////////////////////////////////////////////////
//             Ad-Block: First line of Defense
//              By: Lily Watterson (Lilygoat)
//                      v0.1
//////////////////////////////////////////////////////////

var srcNodeList = document.querySelectorAll('[src],[href],[id]');
var file = "block_list_master.txt";

function read(callback) {
    var reader = new FileReader();
  
    reader.onload = function() {
      callback(reader.result);
    }
  
    reader.readAsText(file);
    console.log(reader.result);
}


