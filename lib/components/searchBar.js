import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    // doSearchDebounce = debounce(() => {
    //     this.props.doSearch(this.state.searchTerm)
    // },300) //enable incase if you want to search once you've typed the word

    doSearchDebounce = debounce(() => {
      this.props.store.setSearchTerm(this.state.searchTerm)
    })

    changeHandler =(event) => {
        this.setState({searchTerm: event.target.value} , () => {
            this.doSearchDebounce();
        });
    }

    render () {
     return <input type='search' placeholder= 'Enter the text' onChange={this.changeHandler}/>       
 }
}

export default storeProvider()(SearchBar);