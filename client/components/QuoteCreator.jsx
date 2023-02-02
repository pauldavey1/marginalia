import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookTitle from './BookTitle.jsx';

function QuoteCreator(props) {
  const { id } = useParams();

  return (
    <div>
      <div className='header'>
        <h1>Marginalia</h1>
        <Link to={`/books/${id}`}>
          <button className='headerbutton' id='backheaderbutton'>
            Back to book
          </button>
        </Link>
      </div>
      <BookTitle />

      <div className='bookcreator'>
        <b>Text:</b>
        <br></br>
        <input id='textField' size='60'></input>
        <br></br>
        <div id='quoteSelector'>
          <input
            type='radio'
            id='quote'
            name='isQuote'
            value='true'
            defaultChecked
          ></input>
          <label htmlFor='quote'>Quote</label>
          <input type='radio' id='note' name='isQuote' value='false'></input>
          <label htmlFor='note'>Note</label>
        </div>
        <br></br>
        <br></br>
        <b>Page number:</b>
        <br></br>
        <input id='pageField' size='3'></input>
        <br></br>
        <br></br>
        <Link to={`/books/${id}`} state={{ loaded: false }}>
          <button
            className='primarybutton'
            onClick={() => {
              fetch(`/api/quotes`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify({
                  text: document.getElementById('textField').value,
                  quote: document.getElementById('quote').checked
                    ? true
                    : false,
                  page: document.getElementById('pageField').value,
                  bookid: id,
                }),
              });
            }}
          >
            Create quote
          </button>
        </Link>
      </div>
    </div>
  );
}
export default QuoteCreator;
