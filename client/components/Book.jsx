import React from 'react';

function Book(props) {
  //   console.log('making a book!');
  return (
    <div class='book'>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </div>
  );
}

export default Book;
