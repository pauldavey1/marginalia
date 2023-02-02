import React from 'react';

function Book(props) {
  //   console.log('making a book!');
  return (
    <div className='book' id={props.id}>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </div>
  );
}

export default Book;
