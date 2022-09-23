var req = new XMLHttpRequest();
var parser, xmlDoc;
parser = new DOMParser();

var awardStatus = "Winner";
var year = 2022;
var recTable = document.getElementById("games");
var winners = "341919,300010,259830,269526,235655,177524,191004,171129,146312,130792";
req.open("GET", "https://boardgamegeek.com/xmlapi2/thing?id="+winners+"&stats=1", false);
req.send(null);
var winnerText = req.responseText;
var winnerXmlDoc = parser.parseFromString(winnerText, "text/xml");
var winnerGames = winnerXmlDoc.getElementsByTagName("item");

for (var i = 0; i < winnerGames.length; i++) {
  var row = recTable.insertRow();
  var cell = row.insertCell(0);
  var tempImg = document.createElement("img");
  tempImg.setAttribute("src", winnerGames[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
  cell.appendChild(tempImg);

  var cell2 = row.insertCell(1);
  cell2.innerHTML = winnerGames[i].getElementsByTagName("name")[0].getAttribute('value');

  var cell3 = row.insertCell(2);
  cell3.innerHTML = awardStatus;

  var cell4 = row.insertCell(3);
  if (winnerGames[i].getElementsByTagName("usersrated")[0].getAttribute('value') == 0) {
    cell4.innerHTML = "N/A";
  } else {
    cell4.innerHTML = Math.round(winnerGames[i].getElementsByTagName("average")[0].getAttribute('value')*10)/10;
  }

  var cell5 = row.insertCell(4);
  cell5.innerHTML = year;
  year--;
}

var nominees = "354892,354886,287591,302417,291550,296514,264295,270140,192283,232045,219509,204592,191538,172507,178053,172542,154681,148767,137480,137152";
req.open("GET", "https://boardgamegeek.com/xmlapi2/thing?id="+nominees+"&stats=1", false);
req.send(null);
var nomineeText = req.responseText;
var nomXmlDoc = parser.parseFromString(winnerText, "text/xml");
var nomineeGames = nomXmlDoc.getElementsByTagName("item");
year = 2022;
awardStatus = "Nominee";

for (var i = 0; i < nomineeGames.length; i++) {
  if (i % 2 == 0 && i != 0) {
    year--; 
   }

  var row = recTable.insertRow();
  var cell = row.insertCell(0);
  var tempImg = document.createElement("img");
  tempImg.setAttribute("src", nomineeGames[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
  cell.appendChild(tempImg);

  var cell2 = row.insertCell(1);
  cell2.innerHTML = nomineeGames[i].getElementsByTagName("name")[0].getAttribute('value');

  var cell3 = row.insertCell(2);
  cell3.innerHTML = awardStatus;

  var cell4 = row.insertCell(3);
  if (nomineeGames[i].getElementsByTagName("usersrated")[0].getAttribute('value') == 0) {
    cell4.innerHTML = "N/A";
  } else {
    cell4.innerHTML = Math.round(nomineeGames[i].getElementsByTagName("average")[0].getAttribute('value')*10)/10;
  }

  var cell5 = row.insertCell(4);
  cell5.innerHTML = year;

}


var boardgames = "341914,358095,355274,299630"+
",339489,330602,327838,342184,320157,320840,299028";

req.open("GET", "https://boardgamegeek.com/xmlapi2/thing?id="+boardgames+"&stats=1", false);
// req.open("GET", "http://localhost:8080/https://boardgamegeek.com/xmlapi2/thing?id="+boardgames+"&stats=1", false);
req.send(null);

var text = req.responseText;

xmlDoc = parser.parseFromString(text, "text/xml");

var tempGames = xmlDoc.getElementsByTagName("item");
year = 2022;
awardStatus = "Recommended";

for (var i = 0; i < tempGames.length; i++) {
  // document.write(tempNames[i]);
  // var row = document.createElement()
  if (i == 4) {
    year--;
  }
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
  cell3.innerHTML = awardStatus;

  var cell4 = row.insertCell(3);
  if (tempGames[i].getElementsByTagName("usersrated")[0].getAttribute('value') == 0) {
    cell4.innerHTML = "N/A";
  } else {
    cell4.innerHTML = Math.round(tempGames[i].getElementsByTagName("average")[0].getAttribute('value')*10)/10;
  }

  var cell5 = row.insertCell(4);
  cell5.innerHTML = year;
}

var search = document.getElementById("search");

search.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var tempValue = search.value;
    window.open("../views/search.html?"+tempValue, '_blank');
  }
});

var yearList = document.getElementById("select");
for (var i = 2022; i > 2012; i--) {
  var tempOption = document.createElement("option");
  tempOption.innerHTML = i;
  yearList.appendChild(tempOption);
}

$(document).ready(function() {
  $("#filter").on("keyup", filter);
  $("#select").change(filter);
  $("#status").change(filter);
  // $("winnerFilter").on("keyup", search());
  // $("winnerSelect").change(search());

  function filter() {
    // var value = (table == "rec") ? $("#filter").val().toLowerCase() : $("#winnerFilter").val().toLowerCase();
    var value = $("#filter").val().toLowerCase();
    // var year = (table == "rec") ? $("#select").val() : $("#winnerSelect").val();
    var year = $("#select").val();
    var awardStatus;
    switch ($("#status").val()) {
      case "Winners":
        awardStatus = "Winner";
        break;
      case "Nominees":
        awardStatus= "Nominee";
        break;
      case "Recommended": 
        awardStatus = "Recommended";
        break;
      default:
        awardStatus = "All Statuses";
    }
    // console.log(awardStatus);

    if (year != "All Years" && awardStatus != "All Statuses") { //years and statuses selected
      $("tr:not(.headerRow)").filter(function(){
        // debugger;
        var stringQuery = $(this).text().toLowerCase().indexOf(value) > -1;
        var yearQuery = ($(this).text().indexOf(year) > -1);
        var awardQuery = ($(this).text().indexOf(awardStatus) > -1);
        $(this).toggle(( stringQuery && yearQuery && awardQuery));
      });
    } else if (awardStatus != "All Statuses") { //status 
        $("tr:not(.headerRow)").filter(function(){
          var stringQuery = $(this).text().toLowerCase().indexOf(value) > -1;
          var awardQuery = ($(this).text().indexOf(awardStatus) > -1);
          $(this).toggle((stringQuery && awardQuery));
          // debugger;
        });
    } else if (year != "All Years") {
      $("tr:not(.headerRow)").filter(function(){
        // debugger;
        var stringQuery = $(this).text().toLowerCase().indexOf(value) > -1;
        var yearQuery = ($(this).text().indexOf(year) > -1);
        $(this).toggle(( stringQuery && yearQuery));
      });
    } else {
      $("tr:not(.headerRow)").filter(function(){
        // var stringQuery = $(this).text().toLowerCase().indexOf(value) > -1;
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        // debugger;
      });
    }
  }
});