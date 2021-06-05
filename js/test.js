// declear variants
var displayWidth = 1920;
var displayHeight = 1080;
var img = "20210528_test.png";
var stkcnt = 0;

// get random coordinate
function getRandomCoordinate(){
  var coordinate = [displayWidth * Math.random(), displayHeight * Math.random()];
  return coordinate;
}


function useSticker(img){
  stkcnt++;
  var stkid = "stk" + stkcnt;


  var currentHTML = document.getElementById("main").innerHTML;
  document.getElementById("main").innerHTML =
    currentHTML
    + "<img class=\"sticker\" "
    + "id=\"" + stkid + "\""
    + "src=\"img/" + img + "\">";

  document.getElementById("base").style.display="none"
  setTimeout(function(){removeSticker(stkid)}, 900);

}

function removeSticker(stkid){
  document.getElementById(stkid).remove()
  document.getElementById("base").style.display="inline"
}


// Main functions
window.onkeyup = function(e) {
  var key = event.key;
  switch(key){
    case "0":
      useSticker("00_hi.png");
      break;
    case "1":
      useSticker("01_happy.png");
      break;
    case "2":
      useSticker("02_angry.png");
      break;
    case "3":
      useSticker("03_cry.png");
      break;
    case "4":
      useSticker("04_surprised.png");
      break;
    case "5":
      useSticker("05_doing.png");
      break;
    case "6":
      useSticker("06_nothing.png");
      break;
    case "7":
      useSticker("07_lol.png");
      break;
/*
    case "8":
      useSticker("");
      break;
    case "9":
      useSticker("");
      break;
*/
  }
}
