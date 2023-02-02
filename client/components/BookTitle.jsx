import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookTitle(props) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loaded, setLoaded] = useState(false);
  if (loaded === false) {
    fetch(`/api/${id}/title`)
      .then((res) => {
        return res.json();
      })
      .then((bookObj) => {
        setBook(bookObj);
        console.log(bookObj);
        setLoaded(true);
        return;
      })
      .catch((err) =>
        console.log('Error in BookTitle.jsx API fetch request: ' + err)
      );
  }

  if (loaded === true) {
    return (
      <div className='quotebook'>
        <p className='quotebooktitle'>{book.title}</p>
        <p className='quotebookauthor'>{book.author}</p>
      </div>
    );
  }
}

export default BookTitle;
