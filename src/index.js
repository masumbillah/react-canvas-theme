//Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

//Redux store
import  store from '../src/services/store'

//Import app styles
// import './themes/style.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);