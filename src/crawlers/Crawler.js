const puppeteer = require('puppeteer');
const Error = require("../models/Error");
const slugify = require("slugify");
const Article = require("../models/Article");
const Statistics = require("../models/Statistics");

class Crawler {

    static crawl() {
        const Article = require("../models/Article");
        const Error = require("../models/Error");
        const Statistics = require("../models/Statistics");
        const slugify = require('slugify');
        let list;
        try {
            list = require('./List.js');
            list = list.getList();
        }
        catch (e) {
            console.log(e)
        }
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(60000);
            let newArticles = [];

            let crawledSources = {
                total: list.length,
                count: 0
            };

            for (let h = 0; h < list.length; h++) {
                const sources = list[h].list;
                crawledSources[list[h].prettyName] = {
                  total: sources.length,
                  count: 0,
                  sources: []
                };
                for (let i = 0; i < sources.length; i++) {
                    let source = sources[i];

                    let articles = await this.crawlSource(page, source);
                    source.numberOfArticles = articles.length;

                    // console.log("articles", articles);
                    if (articles.length == 0) {
                        let result = await Error.add({
                            type: "No articles found.",
                            sourceId: source.id
                        });
                    }

                    for (let i = 0; i < articles.length; i++) {
                        let article = articles[i];
                        if (!article.title) {
                            let result = await Error.add({
                                type: "No article title found.",
                                sourceId: source.id
                            });
                        }
                        article.id = (source.id + "-" + slugify(article.title || ""));
                        article.sourceId = source.id;
                        article = Article.add(article);
                        if (article) {
                            newArticles.push(article);
                        }
                    }
                    crawledSources[list[h].prettyName].count = crawledSources[list[h].prettyName].count+1;
                    crawledSources[list[h].prettyName].sources.push(source.prettyName);
                }
                crawledSources.count = crawledSources.count + 1;
                console.log(crawledSources);
            }
            console.log("new articles");
            console.log(newArticles);
            await browser.close();
  
            await Statistics.add({
              runDate: new Date(),
              resources: list
            });

            console.log("Crawler finished!");
        })();
    }

    static async crawlSourceById(id) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(60000);
        let List;
        try {
            List = require('./List.js');
        } catch (e) {
            console.log(e)
        }
        const source = List.getSourceById(id);
        // get all articles
        let articles = await this.crawlSource(page, source);
        // add to db

        if (articles.length == 0) {
            let result = await Error.add({
                type: "No articles found.",
                sourceId: source.id
            });
            return {
                "articles": 0,
                "newArticles": 0
            };
        }
        let newArticles = 0;
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            if (!article.title) {
                let result = await Error.add({
                    type: "No article title found.",
                    sourceId: source.id
                });
            }
            article.id = (source.id + "-" + slugify(article.title || ""));
            article.sourceId = source.id;
            article = await Article.add(article);
            if (article) {
                newArticles++;
            }
        }
        return {"articles": articles, "newArticles": newArticles};
    }

    static async crawlSource(page, source) {
        const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/80.0.3987.0 Safari/537.36";
        // check if different user-agent is needed
        if (source.userAgent) {
            await page.setUserAgent(source.userAgent);
        } else {
            await page.setUserAgent(USER_AGENT);
        }

        await page.goto(source.link);

        if (source.querySelectorParam) {
            const selector1 = await page.waitForSelector(source.querySelectorParam);
        }

        const content = await page.evaluate(() => {
            return {text: document.querySelector('body').innerText, html: document.documentElement.outerHTML};
        });
        let parser = new source.parser(source.link, content);
        let articles = parser.parse(source.itemsConfig, source.titleConfig, source.dateConfig, source.linkConfig);

        if (source.children) {
            for (let j = 0; j < articles.length; j++) {
              
                await page.goto(articles[j].link, { waitUntil: 'networkidle2' });

                const content = await page.evaluate(() => {
                    return {
                        text: document.querySelector('body').innerText,
                        html: document.documentElement.outerHTML
                    };
                });
                let parser = new source.children(articles[j].link, content);
                let newArticle = parser.parse(articles[j]);
                articles[j] = newArticle;
            }
        }

        return articles;
    }


    static async test(crawler) {
        const HTMLPage = require('../crawlers/html/HTMLPage');
        const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/80.0.3987.0 Safari/537.36";
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            // check if different user-agent is needed
            if (crawler.userAgent) {
                await page.setUserAgent(crawler.userAgent);
            } else {
                await page.setUserAgent(USER_AGENT);
            }

            await page.goto(crawler.link);

            if (crawler.querySelectorParam) {
                const selector1 = await page.waitForSelector(crawler.querySelectorParam);
            }

            const content = await page.evaluate(() => {
                return {text: document.querySelector('body').innerText, html: document.documentElement.outerHTML};
            });
            let parser = new HTMLPage(crawler.link, content);
            let crawlerFunction = eval(crawler.fun);
            let articles = crawlerFunction(parser.document, crawler.link);

            if (articles.length == 0) {
                console.log({
                    type: "No articles found.",
                    crawlDate: new Date()
                });
            }

            await browser.close();
            return articles;
    }

    static async complete() {
        return await Statistics.add({
            runDate: Date.now(),
            resources: []
        });
    }

}

module.exports = Crawler;