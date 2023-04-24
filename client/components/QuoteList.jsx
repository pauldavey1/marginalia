import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Quote from './Quote.jsx';
import BookTitle from './BookTitle.jsx';

function QuoteList(props) {
  const { id } = useParams();
  const [componentArray, setComponentArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  if (loaded === false) {
    setTimeout(() => {
      fetch(`/api/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((quoteArray) => {
          console.log(quoteArray);
          setComponentArray(
            quoteArray.map((quote) => {
              return (
                <Quote
                  key={quote._id}
                  id={quote._id}
                  text={quote.text}
                  page={quote.page}
                  quote={JSON.parse(quote.isQuote)}
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
