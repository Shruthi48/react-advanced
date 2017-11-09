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
7. include `babel-polyfill` in webpack.config (to support async await)

#### Rule of thumbs ####
` create variables inside class component only if it needs to be created everytime the component renders or else define it in global space `


<h4> Server side Rendering (without Redux) </h4></br>

<p>The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests our app(search engine indexing). When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties.
This increases the performance when working on old browsers or slow internet speed as the server already has the copy , only the components with the change is re-rendered on the screen </p> </br>

1. setup server (index.ejs is called when the first request is made to server , rendering html markup on server side)
```
import express  from 'express';
import  config from './config.js';
import  serverRender  from './serverRender.js';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent } );
});


app.listen(config.port, function listenHandler() {
  console.log('server running at port:',config.port);
});
```
2. setup render server (sends the requested component in the form of string to client)
```
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app';

const serverRender = () => {
  return  ReactDOMServer.renderToString(
        <App />
    );
};

export default serverRender;

```
3. hook html with a param
```
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <p>This is webpack complete guide</p>
        <div id="root"><%- initialContent -%></div>
        <script src= 'bundle.js' ></script>
    </body>
</html>
```

