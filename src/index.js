import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: for styling
import App from './App';  // Your main App component
import reportWebVitals from './reportWebVitals'; // Optional

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: report web vitals for performance tracking
reportWebVitals();
