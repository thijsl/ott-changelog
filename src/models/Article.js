const MongoDB = require('../database/MongoDB');

class Article {
    constructor(title, date, link, notes, id, sourceId, content) {
        this.title = title;
        this.date = date;
        this.link = link;
        this.notes = notes;
        this.id = id;
        this.sourceId = sourceId;
        this.content = content;
        this.createdAt = new Date();
    }
    static create(articleParameters) {
        let article = new Article(
            articleParameters.title,
            articleParameters.date,
            articleParameters.link,
            articleParameters.notes,
            articleParameters.id,
            articleParameters.sourceId,
            null);
        return article;
    }
    static async add(articleParameters) {
        let article = this.create(articleParameters);
        const db = MongoDB.getDb();
        const result = await db.collection("articles").updateOne(
            {
                "sourceId": article.sourceId,
                "id": article.id
            },
            {
                "$set": {
                    "title": article.title,
                    "date": article.date,
                    "link": article.link,
                    "id": article.id,
                    "sourceId": article.sourceId
                }
            },
            {
                "upsert": true
            }
        );
        if (result.upsertedCount == 0) {
            return false;
        }
        return article;
    }
    static remove(id) {

    }
    static async find(query) {
        const db = MongoDB.getDb();
        let articles = await db.collection("articles").find(query).toArray();
        return articles;
    }
    static async findOne(query) {
        const db = MongoDB.getDb();
        let article = await db.collection("articles").findOne(query);
        return article;
    }
    static async count(query) {
        const db = MongoDB.getDb();
        let nbOfArticles = await db.collection("articles").find(query).count();
        return nbOfArticles;
    }
    static async enableIgnoreById(id) {
        const db = MongoDB.getDb();
        const result = await db.collection("articles").updateOne(
            {
                "id": id
            },
            {
                "$set": {
                    "ignore": true
                }
            }
        );
        return result;
    }

    static async setNotesById(id, notes) {
        const db = MongoDB.getDb();
        const result = await db.collection("articles").updateOne(
            {
                "_id": id
            },
            {
                "$set": {
                    "notes": notes,
                    "ignore": false
                }
            }
        );
        return result;
    }
}

module.exports = Article;