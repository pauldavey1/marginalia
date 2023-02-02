import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  const [deleted, setDeleted] = useState(false);
  if (deleted === false) {
    return (
      <div className='book' id={props.id}>
        <div className='booktitle'>{props.title}</div>
        <div className='bookauthor'>{props.author}</div>
        <div className='bookbuttons'>
          <Link to={'/books/' + props.id}>
            <button className='primarybutton'>Show Saved Notes</button>
          </Link>
          <button
            className='deletebutton'
            onClick={() => {
              fetch('/api', {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify({
                  _id: props.id,
                }),
              });
              setDeleted(true);
            }}
          >
            Delete book
          </button>
        </div>
      </div>
    );
  }
}

export default Book;
