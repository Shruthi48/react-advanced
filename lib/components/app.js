import React from 'react';
import StateApi from 'state-Api';
import axios from 'axios';
import Articleslist from './articleList';
import PropTypes from 'prop-types';
import SearchBar from './searchBar';
import pickBy from 'lodash.pickby';

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

    setSearchItem = (searchTerm) => {
        this.setState({searchTerm});
    }
    
    render() {
        let { articles, searchTerm } = this.state;
        if(searchTerm) {
            articles = pickBy(articles,(value) => {
              return value.title.match(searchTerm) || value.body.match(searchTerm)
            })
        }
        
        return (
            <div>
              <SearchBar doSearch={this.setSearchItem}/>
              <Articleslist 
                articles = {articles}
              />
            </div>
        )
    }
}
App.childContextTypes = {
    store: PropTypes.object
}