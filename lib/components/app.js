import React from 'react';
import DataApi from '../dataApi';
import { data } from '../testData';
import Articleslist from './articleList';

const api = new DataApi(data);

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        }
    }

    

    render() {
        const articleActions = {
            lookupAuthor: id => this.state.authors[id]
        }
        
        return (
            <Articleslist 
              articles = {this.state.articles}
              authors = { articleActions }
            />
        )
    }
} 