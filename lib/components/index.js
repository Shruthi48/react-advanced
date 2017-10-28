import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 123
    };
  }

  asyncFunc ()  {
    return Promise.resolve(456);
  }

  async componentDidMount() {
    this.setState( { 
      id: await this.asyncFunc()
    })
  }

  render() {
    return (
      <h1> This is React Client side application - {this.state.id} </h1>
    )
  }
}


ReactDOM.render(
  <App /> , document.getElementById('root')
);