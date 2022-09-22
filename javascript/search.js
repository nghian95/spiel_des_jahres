var req = new XMLHttpRequest();
const queryString = window.location.search;
queryString.replace("?","");

// req.open("GET", "http://localhost:8080/https://boardgamegeek.com/xmlapi2/search?query=" + queryString, false);
req.open("GET", "https://boardgamegeek.com/xmlapi2/search?query=" + queryString, false);
req.send(null);
var parser, xmlDoc, cascadiaName, cascadiaImg, cascadiaRating;
var text = req.responseText;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

var tempGames = xmlDoc.getElementsByTagName("item");
var recTable = document.getElementById("recommended");


for (var i = 0; i < tempGames.length; i++) {

  var row = recTable.insertRow();
  var cell = row.insertCell(0);

  try {
    var tempName = tempGames[i].getElementsByTagName("name")[0].getAttribute('value');
    var tempA = document.createElement("a");
    tempA.setAttribute("href", "https://boardgamegeek.com/boardgame/" + tempGames[i].getAttribute('id'));
    tempA.innerHTML = tempName;
    cell.appendChild(tempA);

    var cell2 = row.insertCell(1);
    cell2.innerHTML = tempGames[i].getElementsByTagName("yearpublished")[0].getAttribute('value');

  } catch (Exception) {
    console.log(Exception);
    if (cell2.innerHTML == "") {
      cell2.innerHTML = "N/A";
    }
  }
}

var search = document.getElementById("search");

search.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var tempValue = search.value;
    window.open("../views/search.html?"+tempValue, '_self');
  }
});