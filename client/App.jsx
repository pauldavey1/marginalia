import React, { Component } from 'react';
import { render } from 'react-dom';

function App() {
  return <h1>React Test!</h1>;
}

const root = document.querySelector('#root');
root.render(<App />);
