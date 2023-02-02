import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
  const [deleted, setDeleted] = useState(false);
  if (deleted === false) {
    return (
      <div className='book' id={props.id}>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <button
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
    );
  }
}

export default Book;
