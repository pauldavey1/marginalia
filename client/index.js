import React from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('react'));
root.render(<App />);

// brower router version:
// createPortal(
//   //   <BrowserRouter>
//   //     <App />
//   //   </BrowserRouter>,
//   <h1>index.js test</h1>
// );
