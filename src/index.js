import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
