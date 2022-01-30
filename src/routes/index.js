var express = require('express');
var router = express.Router();

// moment should be replaced with luxon
const moment = require('moment');
const { DateTime } = require("luxon");

const Crawler = require('../crawlers/Crawler');
let List;
try {
    List = require('../crawlers/List');
}
catch (e) {
    console.log(e)
}
const Markdown = require('../util/format/Markdown');
const Article = require('../models/Article');
const Statistics = require('../models/Statistics');
const write = require('write');
require('dotenv').config()

const MongoDB = require('../database/MongoDB');
MongoDB.connect( function(error) {
    if (error) {
        console.error("Couldn't connect to MongoDB.");
        process.exit(1);
    }
});

router.get('/', async function (req, res, next) {
  let statistics = await Statistics.getCrawlerLastRunDate();
  let lastRunDate = null;
  if (statistics && statistics.length > 0) {
      console.log("stats", statistics);
    lastRunDate = DateTime.fromMillis(statistics[0].runDate);
  }
  res.render('index', {title: 'OTT Changelog', lastRunDate: lastRunDate});
});

/* GET home page. */
router.get('/articles/crawl', async function (req, res, next) {
  let statistics = await Statistics.getCrawlerLastRunDate();
  let lastRunDate = null;
  if (statistics && statistics.length > 0) {
    console.log(statistics);
    lastRunDate = DateTime.fromMillis(statistics[0].runDate);
  }
  res.render('articles-crawl', {title: 'Crawl Articles', lastRunDate: lastRunDate});
  // Crawler.crawl();
});

router.all('/articles/review',  async function (req, res, next) {
    let startDate = req.body.startdate || moment().startOf('week').format("YYYY-MM-DD");
    let endDate = req.body.enddate || moment().endOf('week').add(1, 'days').format("YYYY-MM-DD");
    const query = {"date":{"$gte":new Date(startDate),"$lt":new Date(endDate)}, "notes": null};
    let articles = await Article.find(query);
    res.render('articles-review', {title: 'Review Articles', articles: articles, startDate: startDate, endDate: endDate});
});

router.get('/update-note', async function (req, res, next) {
    let article = await Article.findOne({"id": req.query.id});
    res.render('update-article', {title: 'Add note to ' + article.title, article: article});
});

router.post('/update-note', async function (req, res, next) {
    let id = req.body.id;
    let newNote = req.body.note;
    let article = await Article.findOne({"id": req.body.id});
    if (newNote.toLowerCase() == "ignore") {
        await Article.enableIgnoreById(id);
    } else {
        if (newNote || newNote == "") {
            let notes;
            if (!article.notes) {
                notes = [];
            } else {
                notes = article.notes;
            }
            if (newNote.length > 0) {
                notes.push(newNote)
            }
            await Article.setNotesById(id, notes);
        }
    }
    res.render('update-article', {title: 'Add note to ' + article.title, article: article});
});

router.all('/articles/view', async function (req, res, next) {
    let startDate = req.body.startdate || moment().startOf('week').format("YYYY-MM-DD");
    let endDate = req.body.enddate || moment().endOf('week').add(1, 'days').format("YYYY-MM-DD");
    const query = {"date":{"$gte":new Date(startDate),"$lt":new Date(endDate)}, "ignore": false};
    let articles = await Article.find(query);
    const mdTable = Markdown.format(articles);
    write("articles.md", mdTable, { overwrite: true });
    res.render('articles-view', {title: 'Articles', articles: articles, startDate: startDate, endDate: endDate});
});

router.get('/resources/all', async function (req, res, next) {

  let statistics = await Statistics.getCrawlerLastRunDate();
  let lastRunDate = null;
  let resources = null;

  if (statistics && statistics.length > 0) {
    lastRunDate = DateTime.fromMillis(statistics[0].runDate);
  }
  resources = List.getList();
  async function enrichWithNbOfArticles(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].list.length; j++) {
            let source = list[i].list[j];
            let nbOfArticles = await Article.count({"sourceId": source.id});
            source.numberOfArticles = nbOfArticles;
        }
    }
    return list;
  }
  resources = await enrichWithNbOfArticles(resources);
  res.render('resources-all', {title: 'All Resources', lastRunDate: lastRunDate, resources: resources});
});

router.get('/crawl-test', function (req, res, next) {
    res.render('crawl-test', {title: 'Crawl Test'});
});

router.post('/crawl-test', async function (req, res, next) {
    let crawler = {
        id: req.body.id,
        link: req.body.link,
        prettyName: req.body.prettyName,
        sourceId: req.body.sourceId,
        fun: "("+req.body.fun+")"
    };
    let articles = await Crawler.test(crawler);
    console.log(articles);
    res.render('crawl-test', {title: 'Crawl test'});
});

router.get('/crawl-list', async function(req, res) {
    const list = List.getList();
    res.json(list);
});

router.post("/crawl-source", async function(req, res) {
    const source = req.body;
    const data = await Crawler.crawlSourceById(source.id);
    res.json(data);
})

router.post("/articles/crawl/complete", async function(req, res) {
    const crawlComplete = await Crawler.complete();
    res.json(crawlComplete);
});

module.exports = router;