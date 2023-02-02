import React from 'react';
import BookList from './components/BookList.jsx';
import BookCreator from './components/BookCreator.jsx';
import QuoteList from './components/QuoteList.jsx';
import QuoteCreator from './components/QuoteCreator.jsx';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<BookCreator />} />
          <Route path='/' element={<BookList />} />
          <Route path='/books/:id' element={<QuoteList />} />
          <Route path='/books/:id/create' element={<QuoteCreator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
