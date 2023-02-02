import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quote from './Quote.jsx';

function QuoteList(props) {
  //   const [componentArray, setComponentArray] = useState([]);
  //   const [loaded, setLoaded] = useState(false);
  //   // console.log('making a booklist!');
  //   if (loaded === false) {
  //     fetch('/api')
  //       .then((res) => {
  //         // console.log('making BookArray!');
  //         return res.json();
  //       })
  //       .then((bookArray) => {
  //         // console.log('making ComponentArray!');
  //         setComponentArray(
  //           bookArray.map((book) => {
  //             return (
  //               <Book key={book._id} title={book.title} author={book.author} />
  //             );
  //           })
  //         );
  //         setLoaded(true);
  //         return;
  //       })
  //       .catch((err) =>
  //         console.log('Error in Booklist.jsx API fetch request: ' + err)
  //       );
  //   }
  //   if (loaded === true) {
  //     // console.log('time to render stuff!');
  //     // console.log(componentArray);
  //     return (
  //       <div>
  //         <Link to='/create'>
  //           <button>Add a new book</button>
  //         </Link>
  //         {componentArray}
  //       </div>
  //     );
  //   }
}

export default QuoteList;
