import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import StateApi from 'state-Api';

const store = new StateApi(window.initialData);
//3. the client side dom is now able to get the data from window.initialData rather than making another request

ReactDOM.render(
  <App store={store} /> , document.getElementById('root')
);