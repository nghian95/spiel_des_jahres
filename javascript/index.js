var req = new XMLHttpRequest();
req.open("GET", "http://localhost:8080/https://boardgamegeek.com/xmlapi2/thing?id=295947&stats=1", false);
req.send(null);

var parser, xmlDoc, cascadiaName, cascadiaImg, cascadiaRating;
var text = req.responseText;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

cascadiaName = document.getElementById("cascadiaName");
cascadiaName.innerHTML = xmlDoc.getElementsByTagName("name")[0].getAttribute('value');

cascadiaImg = document.getElementById("cascadiaImg");
cascadiaImg.src = xmlDoc.getElementsByTagName("image")[0].childNodes[0].nodeValue;

cascadiaRating = document.getElementById("cascadiaRating");
cascadiaRating.innerHTML += Math.round(xmlDoc.getElementsByTagName("average")[0].getAttribute('value')*10)/10;

document.getElementById('submit').onclick = function(e) {
  alert(document.getElementById("game").value);
}

var search = document.getElementById("search");

search.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var tempValue = search.value;
    window.open("./views/search.html?"+tempValue, '_blank');
  }
});