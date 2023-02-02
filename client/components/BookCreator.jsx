import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookCreator(props) {
  return (
    <div>
      <div className='header'>
        <h1>Marginalia</h1>
        <Link to='/'>
          <button className='headerbutton' id='backheaderbutton'>
            Back to book list
          </button>
        </Link>
      </div>
      <div className='bookcreator'>
        <b>Title:</b>
        <br></br>
        <input id='titleField' size='40'></input>
        <br></br>
        <br></br>
        <b>Author:</b>
        <br></br>
        <input id='authorField' size='40'></input>
        <br></br>
        <br></br>
        <b>ISBN:</b>
        <br></br>
        <input id='isbnField' placeholder='optional' size='20'></input>
        <br></br>
        <br></br>
        <Link to='/' state={{ loaded: false }}>
          <button
            className='primarybutton'
            onClick={() => {
              fetch('/api', {
                method: 'POST',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify({
                  title: document.getElementById('titleField').value,
                  author: document.getElementById('authorField').value,
                  isbn13: document.getElementById('isbnField').value,
                }),
              });
            }}
          >
            Create book
          </button>
        </Link>
      </div>
    </div>
  );
}
export default BookCreator;
