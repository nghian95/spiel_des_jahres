var req = new XMLHttpRequest();
// req.open("GET", "http://localhost:8080/https://boardgamegeek.com/xmlapi2/thing?id=295947&stats=1", false);
req.open("GET", "https://boardgamegeek.com/xmlapi2/thing?id=295947,291453,300905&stats=1", false);
req.send(null);

var parser, xmlDoc, cascadiaName, cascadiaImg, cascadiaRating;
var text = req.responseText;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

var tempGames = xmlDoc.getElementsByTagName("item");

cascadiaName = document.getElementById("cascadiaName");
cascadiaName.innerHTML = tempGames[0].getElementsByTagName("name")[0].getAttribute('value');

var scoutName = document.getElementById("scoutName");
scoutName.innerHTML = tempGames[1].getElementsByTagName("name")[0].getAttribute('value');

top10Name = document.getElementById("top10Name");
top10Name.innerHTML = tempGames[2].getElementsByTagName("name")[0].getAttribute('value');

cascadiaImg = document.getElementById("cascadiaImg");
cascadiaImg.src = tempGames[0].getElementsByTagName("image")[0].childNodes[0].nodeValue;

var scoutImg = document.getElementById("scoutImg");
scoutImg.src = tempGames[1].getElementsByTagName("image")[0].childNodes[0].nodeValue;

var top10Img = document.getElementById("top10Img");
top10Img.src = tempGames[2].getElementsByTagName("image")[0].childNodes[0].nodeValue;

cascadiaRating = document.getElementById("cascadiaRating");
cascadiaRating.innerHTML += Math.round(tempGames[0].getElementsByTagName("average")[0].getAttribute('value')*10)/10;

var scoutRating = document.getElementById("scoutRating");
scoutRating.innerHTML += Math.round(tempGames[1].getElementsByTagName("average")[0].getAttribute('value')*10)/10;

var top10Rating = document.getElementById("top10Rating");
top10Rating.innerHTML += Math.round(tempGames[2].getElementsByTagName("average")[0].getAttribute('value')*10)/10;

document.getElementById('submit').onclick = function(e) {
  var regex = /^[\sa-zA-Z0-9,#.-:]+$/;
  var element = document.getElementById("game");
  if (regex.test(element.value)) {
    alert(element.value);
  } else {
    alert("Wrong input. \nOnly letters, numbers and ,#.-: symbols allowed");
  }
}

var search = document.getElementById("search");

search.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var tempValue = search.value;
    window.open("./views/search.html?"+tempValue, '_blank');
  }
});