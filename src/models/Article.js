const Database = require('../database/Database');
const DB_NAME = 'articles';

class Article {
    constructor(title, date, link, notes, id, sourceId, content) {
        this.title = title;
        this.date = date;
        this.link = link;
        this.notes = notes;
        this.id = id;
        this.sourceId = sourceId;
        this.content = content;
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
    static getArticles() {
        return Database.getInstance().db.get(DB_NAME);
    }
    static add(articleParameters) {
        let article = this.create(articleParameters);
        let exists = this.exists(article.id, article.sourceId);
        if (!exists) {
            this.getArticles()
                .push(article)
                .write();
            return article;
        } else {
            return null;
        }
    }
    static remove(id) {

    }
    static getAll(id, sourceId) {
        let articles = this.getArticles().filter({sourceId: sourceId, id: id}).value();
        return articles;
    }
    static exists(id, sourceId) {
        let articles = this.getAll(id, sourceId);
        let exists = (articles.length > 0);
        return exists;

    }

    static getAllByFilter(filter) {
        let articles = this.getArticles().filter(filter).value();
        return articles;
    }

    static enableIgnoreById(id) {
        this.getArticles()
            .find({ id: id })
            .assign({ ignore: true})
            .write();
    }

    static setNotesById(id, notes) {
        this.getArticles()
            .find({id: id})
            .assign({notes: notes})
            .write();
    }
}

module.exports = Article;