import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Quote from './Quote.jsx';
import BookTitle from './BookTitle.jsx';

function QuoteList(props) {
  const { id } = useParams();
  const [componentArray, setComponentArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // console.log('making a booklist!');
  if (loaded === false) {
    setTimeout(() => {
      fetch(`/api/${id}`)
        .then((res) => {
          // console.log('making BookArray!');
          return res.json();
        })
        .then((quoteArray) => {
          // console.log('making ComponentArray!');
          setComponentArray(
            quoteArray.map((quote) => {
              return (
                <Quote
                  key={quote._id}
                  id={quote._id}
                  text={quote.text}
                  page={quote.page}
                  quote={quote.quote}
                />
              );
            })
          );
          setLoaded(true);
          return;
        })
        .catch((err) =>
          console.log('Error in QuoteList.jsx API fetch request: ' + err)
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
          <div className='headerbuttonholder'>
            <Link to={`/`}>
              <button className='headerbutton' id='backheaderbutton'>
                Back to book list
              </button>
            </Link>
            <Link to={`/books/${id}/create`}>
              <button className='headerbutton'>Add a new note</button>
            </Link>
          </div>
        </div>
        <div className='quotelist'>
          <BookTitle />
          {componentArray}
        </div>
      </div>
    );
  }
}

export default QuoteList;
