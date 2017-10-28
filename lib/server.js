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