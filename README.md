# react-advanced

<b> eslint </b> </br>
1. To add npm module - `yarn add --dev eslint`
2. To add eslint config - `yarn eslint -- --init`
3. add plugins - `yarn add --dev eslint-plugin-react babel-eslint`

<b> express </b> </br>
1. yarn add express ejs (production dependency)
2. add server.js ( server side rendering)
```
import express  from 'express';
import  config from './config.js';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('index', { title : ' React Advanced Project'});
});


app.listen(config.port, function listenHandler() {
  console.log('server running at port:',config.port);
});
```
3.yarn add pm2
4. add the following config to package.json
```
"dev": "pm2 start lib/server.js --watch ",
```
5. create components/index.js (client side rendering)
```
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
```

6. yarn add react react-dom webpack
7. include `babel-polyfill` in webpack.config


