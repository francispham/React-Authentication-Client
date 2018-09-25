import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';

import reducers from './reducers'
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
