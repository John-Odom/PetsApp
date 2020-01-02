import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';
// import allReducers from './reducers/allReducers.js';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import ScrollToTop from './scrollToTop'
// let store = createStore(allReducers)

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
