# spiel_des_jahres
A webpage detailing information on the Spiel Des Jahres based in Germany for boardgames along with winners and nominees.

# Technical Specifications
This website uses Bootstrap 3.4.1 through a Content Delivery Network (CDN) to style the divs and navigation bar.
https://getbootstrap.com/docs/3.4/

It implements the BGG_XML_API2 to retrieve data from the popular board website boardgamegeek.com. The API specifications can be found below:
https://boardgamegeek.com/wiki/page/BGG_XML_API2

Implemented the BGG_XML_API2 through CORS-Anywhere as the BGG_XML_API2 doesn't support a cross-domain request so we have to mirror server-side access.
Followed this tutorial for the installation of CORS-Anywhere and code to send GET requests to BGG_XML_API2:
http://www.tayloraliss.com/bggapi

The project uses HTML, CSS & JavaScript. These files are located under their respective folders: views, style and javascript.

# General Flow
On the home page of the Spiel des Jahres website, it provides basic info on the awards and the 2022 Spiel das Jahres winner and nominees.
At the top of each page, there's a navigation bar that you can use to access different awards and their winners and nominees throughout the years.