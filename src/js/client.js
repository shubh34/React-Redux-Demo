import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/AppStore.js';
import { createStore } from "redux";

// import todos from './reducers/TodoReducer';

import Home from './components/Home.jsx';
const app = document.getElementById('app');
//let store = createStore(todos);

/**
  * Starts the application with the Provider Wrapper from Redux
  * @return {ReactComponent} AppRouter which initiates the application.
 */
const startApp = () => {

  ReactDOM.render(<Provider store={store}>
    <Home />
   </Provider>, app);
}

setTimeout(startApp, 50);
