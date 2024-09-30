// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Demo }  from './dist/'
// import Demo from './Demo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Demo />
  // </React.StrictMode>
);
