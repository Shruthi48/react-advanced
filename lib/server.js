import express  from 'express';
import  config from './config.js';
import  serverRender  from '../lib/renderers/server.js';

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