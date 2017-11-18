import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'components/app';
import StateApi from 'state-Api';
import axios from 'axios';
import config from '../config';

const serverRender = async () => {
  //1. we fetch the data 
  //   transform it using stateApi
  //   pass it on as a store prop 

    const res = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StateApi(res.data); //notice the param being passed and used in constructor

  return  {
      initialMarkup: ReactDOMServer.renderToString(
        <App store={store}/>
    ),
    initialData: res.data
  }
};
//2. return an object with initialMarkup , which gets rendered on ejs template
//   initialData is assigned to window.initialData
//   the client side dom is now able to get the data from window.initialData rather than making another request

export default serverRender;