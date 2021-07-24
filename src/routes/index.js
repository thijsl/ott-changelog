var express = require('express');
var router = express.Router();
const moment = require('moment');
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
const write = require('write');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Index'});
});

/* GET home page. */
router.get('/crawl', function (req, res, next) {
    res.render('index', {title: 'Crawl Articles'});
    Crawler.crawl();
});

router.all('/unnoted', function (req, res, next) {
    let startDate = req.body.startdate || moment().startOf('week').format("YYYY-MM-DD");
    let endDate = req.body.enddate || moment().endOf('week').add(1, 'days').format("YYYY-MM-DD");
    let articles = Article.getAllByFilter(function (o) {
        return ((o.date > new Date(startDate).getTime() && o.date < new Date(endDate).getTime())  && (o.notes == null) && (!o.ignore))
    });
    res.render('unnoted', {title: 'Unnoted', articles: articles, startDate: startDate, endDate: endDate});
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

router.all('/view-articles', function (req, res, next) {
    let startDate = req.body.startdate || moment().startOf('week').format("YYYY-MM-DD");
    let endDate = req.body.enddate || moment().endOf('week').add(1, 'days').format("YYYY-MM-DD");
    let articles = Article.getAllByFilter(function (o) {
        return (o.date > new Date(startDate).getTime() && o.date < new Date(endDate).getTime() && !o.ignore)
    });
    const mdTable = Markdown.format(articles);
    write("articles.md", mdTable, { overwrite: true });
    res.render('view-articles', {title: 'Articles', articles: articles, startDate: startDate, endDate: endDate});
});

router.get('/get-resources', function (req, res, next) {
    res.render('index', {title: 'Get Resources'});
    const resources = List.getAllResources();
    console.log(resources);
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

module.exports = router;