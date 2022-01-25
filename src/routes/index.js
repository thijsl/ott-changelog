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

router.get('/', function (req, res, next) {
  let statistics = Statistics.getCrawlerLastRunDate();
  let lastRunDate = null;
  if (statistics) {
    lastRunDate = DateTime.fromMillis(statistics.runDate);
  }
  res.render('index', {title: 'OTT Changelog', lastRunDate: lastRunDate});
});

/* GET home page. */
router.get('/articles/crawl', function (req, res, next) {
  let statistics = Statistics.getCrawlerLastRunDate();
  let lastRunDate = null;
  if (statistics) {
    lastRunDate = DateTime.fromMillis(statistics.runDate);
  }
  res.render('articles-crawl', {title: 'Crawl Articles', lastRunDate: lastRunDate});
  // Crawler.crawl();
});

router.all('/articles/review', function (req, res, next) {
    let startDate = req.body.startdate || moment().startOf('week').format("YYYY-MM-DD");
    let endDate = req.body.enddate || moment().endOf('week').add(1, 'days').format("YYYY-MM-DD");
    let articles = Article.getAllByFilter(function (o) {
        return ((o.date > new Date(startDate).getTime() && o.date < new Date(endDate).getTime())  && (o.notes == null) && (!o.ignore))
    });
    res.render('articles-review', {title: 'Review Articles', articles: articles, startDate: startDate, endDate: endDate});
});

router.get('/update-note', function (req, res, next) {
    let article = Article.getAllByFilter(function (o) {
        return (o.id == req.query.id)
    })[0];
    res.render('update-article', {title: 'Add note to ' + article.title, article: article});
});

router.post('/update-note', function (req, res, next) {
    let id = req.body.id;
    let newNote = req.body.note;
    let article = Article.getAllByFilter(function (o) {
        return (o.id == id)
    })[0];
    if (newNote.toLowerCase() == "ignore") {
        Article.enableIgnoreById(id);
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
            Article.setNotesById(id, notes);
        }
    }
    res.render('update-article', {title: 'Add note to ' + article.title, article: article});
});

router.all('/articles/view', function (req, res, next) {
    let startDate = req.body.startdate || moment().startOf('week').format("YYYY-MM-DD");
    let endDate = req.body.enddate || moment().endOf('week').add(1, 'days').format("YYYY-MM-DD");
    let articles = Article.getAllByFilter(function (o) {
        return (o.date > new Date(startDate).getTime() && o.date < new Date(endDate).getTime() && !o.ignore)
    });
    const mdTable = Markdown.format(articles);
    write("articles.md", mdTable, { overwrite: true });
    res.render('articles-view', {title: 'Articles', articles: articles, startDate: startDate, endDate: endDate});
});

router.get('/resources/all', function (req, res, next) {

  let statistics = Statistics.getCrawlerLastRunDate();
  let lastRunDate = null;
  let resources = null;

  if (statistics) {
    lastRunDate = DateTime.fromMillis(statistics.runDate);
    resources = statistics.resources;
  } else {
    resources = List.getList();
  }

  res.render('resources-all', {title: 'All Resources', lastRunDate: lastRunDate, resources: resources});
  //console.log(resources);
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
    console.log("data", data);
    res.json(data);
})

router.post("/articles/crawl/complete", async function(req, res) {
    const crawlComplete = await Crawler.complete();
    res.json(crawlComplete);
});

module.exports = router;