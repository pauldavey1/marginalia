import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookCreator(props) {
  return (
    <div>
      <Link to='/'>
        <button>Back to book list</button>
      </Link>
      <br></br>
      <br></br>
      Title:
      <br></br>
      <input id='titleField'></input>
      <br></br>
      <br></br>
      Author:
      <br></br>
      <input id='authorField'></input>
      <br></br>
      <br></br>
      ISBN:
      <br></br>
      <input id='isbnField' placeholder='optional'></input>
      <br></br>
      <br></br>
      <Link to='/' state={{ loaded: false }}>
        <button
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
  );
}
export default BookCreator;
