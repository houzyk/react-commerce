import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';

import { PersistGate } from "redux-persist/integration/react";

// components
import App from './App';

// css
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);
