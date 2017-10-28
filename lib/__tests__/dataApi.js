import DataApi from '../dataApi';
import { data } from '../testData';
const api = new DataApi(data);

describe('Transforming Data',() => {
    it('transform articles array to objects',() => {
        const articles = api.getArticles(data);
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);
    })


    it('transform authors array to objects',() => {
        const authors = api.getAuthors(data);
        const authorId = data.authors[0].id;
        const authorTitle = data.authors[0].title;

        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].title).toBe(authorTitle);
    })

})