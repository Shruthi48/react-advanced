import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import StateApi from 'state-Api';//4. single state manager

const store = new StateApi(window.initialData);
//3. the client side dom is now able to get the data from window.initialData rather than making another request
console.log('document.getElementById',document.getElementById('root'));
ReactDOM.render(
  <App store={store} /> , document.getElementById('root')
);