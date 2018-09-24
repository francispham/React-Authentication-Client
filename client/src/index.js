import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Welcome} />
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
