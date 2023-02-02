import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.jsx';

function BookList(props) {
  const [componentArray, setComponentArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // console.log('making a booklist!');
  if (loaded === false) {
    setTimeout(() => {
      fetch('/api')
        .then((res) => {
          // console.log('making BookArray!');
          return res.json();
        })
        .then((bookArray) => {
          // console.log('making ComponentArray!');
          setComponentArray(
            bookArray.map((book) => {
              return (
                <Book
                  key={book._id}
                  id={book._id}
                  title={book.title}
                  author={book.author}
                />
              );
            })
          );
          setLoaded(true);
          return;
        })
        .catch((err) =>
          console.log('Error in Booklist.jsx API fetch request: ' + err)
        );
    }, 200);
  }
  if (loaded === true) {
    // console.log('time to render stuff!');
    // console.log(componentArray);
    return (
      <div>
        <div className='header'>
          <h1>Marginalia</h1>
          <Link to='/create'>
            <button className='headerbutton'>Add a new book</button>
          </Link>
        </div>
        <div className='booklist'>{componentArray}</div>
      </div>
    );
  }
}

export default BookList;
