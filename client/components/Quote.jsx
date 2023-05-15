import React, { useState } from 'react';

function Quote(props) {
  const [deleted, setDeleted] = useState(false);
  if (deleted === false) {
    return (
      <div className={props.quote ? 'quote' : 'note'} id={props.id}>
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
              })
                .then((res) => {
                  if (!res.ok) throw new Error();
                })
                .catch((err) => {
                  alert(
                    `Marginalia encountered an error deleting a quote. Please try again later.`
                  );
                  window.location.reload();
                });
              setDeleted(true);
            }}
          >
            {props.quote ? 'Delete quote' : 'Delete note'}
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
