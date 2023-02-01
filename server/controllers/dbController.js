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

module.exports = controller;
