import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/App.css';
import Calculator from './components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
);
