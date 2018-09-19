import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './markup/css/style.css';
import App from './App';
import { Provider } from 'react-redux';

import store from './configStore';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
