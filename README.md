# Currently unmaintained

This project is no longer maintained by [@thijsl_](https://twitter.com/thijsl_). Reach out through https://ottball.com/about/#contact if you're interested in helping to maintain this project.

## ott-changelog

The OTT Changelog was a weekly OTT blog series published at https://ottball.com.
After stopping this series, the older posts were collected at https://ottball.com/ott-changelog/.

This project hosts the technology that is used to crawl the websites related to those series, and facilitate the process.

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
