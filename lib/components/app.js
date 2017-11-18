import React from 'react';
import StateApi from 'state-Api';
import axios from 'axios';
import Articleslist from './articleList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store.getState();
    }
    
    render() {
        const articleActions = {
            lookupAuthor: id => this.state.authors[id]
        }
        
        return (
            <Articleslist 
              articles = {this.state.articles}
              authors = {this.props.store}
            />
        )
    }
} 