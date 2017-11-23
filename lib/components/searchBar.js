import React from 'react';
import debounce from 'lodash.debounce';

export default class SearchBar extends React.Component {
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
        console.log('dosearch debounce called',this.state.searchTerm);
      this.props.doSearch(this.state.searchTerm)
    })

    changeHandler =(event) => {
        console.log('changeHandler is called..',event.target.value);
        this.setState({searchTerm: event.target.value} , () => {
            this.doSearchDebounce();
        });
        console.log('changeHandler is called..state',this.state.searchTerm);
    }

    render () {
     return <input type='search' placeholder= 'Enter the text' onChange={this.changeHandler}/>       
 }
}