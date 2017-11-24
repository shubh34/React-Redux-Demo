import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route } from 'react-router';

import '../scss/main.scss';
import Home from './components/Home.jsx';
const app = document.getElementById('app');

 /**
  * Starts the application with the Provider Wrapper from Redux
  * @return {ReactComponent} AppRouter which initiates the application.
 */
const startApp = () => {
  ReactDOM.render(<Home/>, app);
}

setTimeout(startApp, 50);
