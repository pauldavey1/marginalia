const db = require('../models/dbModel.js');

const controller = {};

// getBooks gets list of books from DB
controller.getBooks = (req, res, next) => {
  const queryText = 'SELECT * from books';
  db.query(queryText)
    .then((result) => {
      res.locals.result = result.rows;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.getBooks', err: err });
    });
};

controller.addBook = (req, res, next) => {
  console.log('req.body is ', req.body);
  const params = [
    req.body.title,
    req.body.author,
    isNaN(parseInt(req.body.isbn13)) ? null : parseInt(req.body.isbn13),
  ];
  const queryText =
    'INSERT INTO books (title, author, isbn13) VALUES ($1, $2, $3)';
  db.query(queryText, params)
    .then((result) => {
      res.locals.result = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.addBook', err: err });
    });
};

module.exports = controller;
