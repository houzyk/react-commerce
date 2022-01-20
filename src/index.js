import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";

// redux
import { Provider } from "react-redux";

// components
import App from './App';

// css
import './index.css';


ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
