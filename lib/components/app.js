import React from 'react';
import StateApi from 'state-Api';
import { data } from '../testData';
import Articleslist from './articleList';

const api = new StateApi(data);

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