import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider  } from 'react-redux'; 
import inventoryStore from './Store/inventoryStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={inventoryStore}>
          <App />
          </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
