// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa el archivo CSS de Tailwind aquí
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
