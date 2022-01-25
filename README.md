# ott-changelog

The **OTT Changelog** is a parser that crawls websites related to OTT technology.

Additionally, the OTT Changelog _was_ a weekly OTT blog series published at https://ottball.com.
After stopping this series, the older posts were collected at https://ottball.com/ott-changelog/.
This project now hosts the technology that was powering that blog series.

## Roadmap

* Add a /articles/get?sourceId=<sourceId> page that lists all articles for a specific source (e.g. HLS), and sorts them from newest to oldest.
* Open the correct /articles/get?sourceId=<sourceId> page when clicking the source ID in the /articles/crawl list.
* Change DB from `lowdb` to MongoDB.
  * Allow users to configure https://www.mongodb.com/atlas/database through a login.
  If these credentials are available, uses that cloud database instead of the local MongoDB storage.
* Improve the UX of reviewing articles.
* Add automatic "CRON"-like crawling, and automatically email (e.g. weekly) digest.

## Usage

1. Run `npm install` to install the dependencies.
2. Run `npm run start` to start the local web server.
3. Go to `http://localhost:3000/` to use the web app GUI.

Then,
1. Select `Crawl` to index new items.
2. Select `Unnoted` to view items you have not yet reviewed.
3. Select `View articles` to get browse through your articles.

Check the terminal running your local web server.
It's likely that some parsers no longer work, which can throws errors, and mess up the project.
You'll have to identify which parser is messing things up, and resolve the issue. :-)
