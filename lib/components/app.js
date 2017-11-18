import React from 'react';
import StateApi from 'state-Api';
import axios from 'axios';
import Articleslist from './articleList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store.getState();
    }

    getChildContext() {
        return {
            store : this.props.store
        }
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
App.childContextTypes = {
    store: PropTypes.object
}