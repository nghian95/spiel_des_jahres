var req = new XMLHttpRequest();
var boardgames = "341914,358095,355274,299630"+
",339489,330602,327838,342184,320157,320840,299028";

req.open("GET", "https://boardgamegeek.com/xmlapi2/thing?id="+boardgames+"&stats=1", false);
// req.open("GET", "http://localhost:8080/https://boardgamegeek.com/xmlapi2/thing?id="+boardgames+"&stats=1", false);
req.send(null);

var parser, xmlDoc, cascadiaName, cascadiaImg, cascadiaRating;
var text = req.responseText;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

var tempGames = xmlDoc.getElementsByTagName("item");
var recTable = document.getElementById("recommended");
var year = 2022;

for (var i = 0; i < tempGames.length; i++) {
  // document.write(tempNames[i]);
  // var row = document.createElement()
  if (i == 4) {
    year--;
  }

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
  cell4.innerHTML = year;
}

var search = document.getElementById("search");

search.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var tempValue = search.value;
    window.open("../views/search.html?"+tempValue, '_blank');
  }
});

$(document).ready(function() {
  $("#filter").on("keyup", search);
  $("#select").change(search);

  function search() {
    var value = $("#filter").val().toLowerCase();
    var year = $("#select").val();
    if (year != "All Years") {
      $("tr:not(#headerRow)").filter(function(){
        $(this).toggle(($(this).text().toLowerCase().indexOf(value) > -1) && ($(this).text().indexOf(year) > -1))
      });
    } else {
      $("tr:not(#headerRow)").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    }
  }

});