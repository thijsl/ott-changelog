# ott-changelog

The **OTT Changelog** is a parser that crawls websites related to OTT technology.

Additionally, the OTT Changelog _was_ a weekly OTT blog series published at https://ottball.com.
After stopping this series, the older posts were collected at https://ottball.com/ott-changelog/.
This project now hosts the technology that was powering that blog series.

## Roadmap

* Add a /articles/get?sourceId=<sourceId> page that lists all articles for a specific source (e.g. HLS), and sorts them from newest to oldest.
* Open the correct /articles/get?sourceId=<sourceId> page when clicking the source ID in the /articles/crawl list.
* Improve the UX of reviewing articles.
* Add automatic "CRON"-like crawling, and automatically email (e.g. weekly) digest.

## Usage

1. Run `npm install` to install the dependencies.
2. Run `npm run start` to start the local web server.
3. Create an `.env` in the root folder and set your `MONGODB_URI=mongodb+srv://<username>:<password>@<domain>` to connect with your MongoDB.
   1. You can grab a free cloud-hosted MongoDB at https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/.
4. Go to `http://localhost:3000/` to use the web app GUI.

Then,
1. Select `Crawl` to index new items.
2. Select `Unnoted` to view items you have not yet reviewed.
3. Select `View articles` to get browse through your articles.

Check the terminal running your local web server.
It's likely that some parsers no longer work, which can throws errors, and mess up the project.
You'll have to identify which parser is messing things up, and resolve the issue. :-)
