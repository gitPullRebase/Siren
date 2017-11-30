import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';

import App from './App.jsx';

const store = createStore(reducer, compose (
  applyMiddleware(thunk),
  // windowdevToolsExtention ? window.devToolsExtension() : f => f
));

const RenderApp = () => {
  render(
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>, document.getElementById('app'));
}

RenderApp();
