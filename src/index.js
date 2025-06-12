// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Import Bootstrap first
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// ✅ Import your custom CSS LAST so it overrides Bootstrap
import './assets/css/templatemo-festava-live.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
