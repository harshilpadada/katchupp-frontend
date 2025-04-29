import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // This should match the path of your index.css file
import App from './App';  
import reportWebVitals from './reportWebVitals'; // Optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
