var req = new XMLHttpRequest();
req.open("GET", "https://boardgamegeek.com/xmlapi2/thing?id=341914,358095,355274,299630&stats=1", false);
req.send(null);

var parser, xmlDoc, cascadiaName, cascadiaImg, cascadiaRating;
var text = req.responseText;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

var tempGames = xmlDoc.getElementsByTagName("item");
var recTable = document.getElementById("recommended");

for (var i = 0; i < tempGames.length; i++) {
  // document.write(tempNames[i]);
  // var row = document.createElement()
  var row = recTable.insertRow();
  var cell = row.insertCell(0);
  var tempImg = document.createElement("img");
  tempImg.setAttribute("src", tempGames[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
  cell.appendChild(tempImg);

  var cell2 = row.insertCell(1);
  cell2.innerHTML = tempGames[i].getElementsByTagName("name")[0].getAttribute('value');

  var cell3 = row.insertCell(2);
  cell3.innerHTML = Math.round(tempGames[i].getElementsByTagName("average")[0].getAttribute('value')*10)/10;

  var cell4 = row.insertCell(3);
  cell4.innerHTML = 2022;
}

var search = document.getElementById("search");

search.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var tempValue = search.value;
    window.open("../views/search.html?"+tempValue, '_blank');
  }
});