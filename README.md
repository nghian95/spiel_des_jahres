# spiel_des_jahres
A webpage detailing information on the Spiel Des Jahres based in Germany for boardgames along with winners and nominees.

# Technical Specifications
GitHub Repository:
https://github.com/nghian95/spiel_des_jahres

Live Demo of the website:
https://nghian95.github.io/spiel_des_jahres/

This website uses Bootstrap 3.4.1 through a Content Delivery Network (CDN) to style the divs and navigation bar.
https://getbootstrap.com/docs/3.4/

Uses JQuery 3.6.0 to implement filtering features for the board game table results
https://jquery.com/

It implements the BGG_XML_API2 to retrieve data from the popular board website boardgamegeek.com. The API specifications can be found below:
https://boardgamegeek.com/wiki/page/BGG_XML_API2

The project uses HTML, CSS & JavaScript. These files are located under their respective folders: views, style and javascript.

# General Flow
On the home page of the Spiel des Jahres website, it provides basic info on the awards and the 2022 Spiel das Jahres winner and nominees.
At the top of each page, there's a navigation bar that you can use to access different awards and their winners, nominees and recommendations throughout the years.
On each Awards page, you can filter the list of boardgames by their Name, Status (Winner, Nominee, Recommendation) and/or the Year they were awarded.
These results are hyperlinked so that you can directly visit their respective boardgamegeek link.
There's also a search bar that you can use to search for a specific game and it'll provide a list of board game results and their respective boardgamegeek links.

# Technical Requirements To Meet
*(Optional) Pagination for Search Results

