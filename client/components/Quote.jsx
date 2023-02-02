import React, { useState } from 'react';

function Quote(props) {
  const [deleted, setDeleted] = useState(false);
  if (deleted === false) {
    return (
      <div className='quote' id={props.id}>
        <p className='pagenumber'>Page {props.page}</p>
        {props.quote === true ? (
          <p className='quotetext'>"{props.text}"</p>
        ) : (
          <p className='quotetext'>{props.text}</p>
        )}
        <div className='quotedeletebutton'>
          <button
            className='deletebutton'
            onClick={() => {
              fetch('/api/quotes', {
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
            Delete quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
