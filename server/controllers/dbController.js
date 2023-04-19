const { Media, Note } = require('../models/dbModel.js');

const controller = {};

// get list of sources from DB
controller.getMedia = (req, res, next) => {
  console.log('line7');
  Media.find()
    .then((result) => {
      res.locals.result = result.rows;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.getMedia', err: err });
    });
};

controller.addBook = (req, res, next) => {
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

controller.deleteBook = (req, res, next) => {
  const id = [req.body._id];
  const quoteQueryText = 'DELETE FROM quotes WHERE bookid = $1';
  db.query(quoteQueryText, id).catch((err) => {
    return next({
      internalLog: 'error deleting quotes in controller.deleteBook',
      err: err,
    });
  });
  const queryText = 'DELETE FROM books WHERE _id = $1 RETURNING *';
  db.query(queryText, id)
    .then((result) => {
      res.locals.result = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        internalLog: 'error deleting book in controller.deleteBook',
        err: err,
      });
    });
};

controller.getBookTitle = (req, res, next) => {
  const id = [req.params.id];
  const queryText = 'SELECT * FROM books WHERE _id = $1';
  db.query(queryText, id)
    .then((result) => {
      res.locals.result = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        internalLog: 'error in controller.getBookTitle',
        err: err,
      });
    });
};

controller.getQuotes = (req, res, next) => {
  const id = [req.params.id];
  const queryText = 'SELECT * FROM quotes WHERE bookid = $1 ORDER BY page';
  db.query(queryText, id)
    .then((result) => {
      res.locals.result = result.rows;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.getQuotes', err: err });
    });
};

controller.addQuote = (req, res, next) => {
  const params = [
    req.body.text,
    req.body.quote,
    isNaN(parseInt(req.body.page)) ? null : parseInt(req.body.page),
    req.body.bookid,
  ];
  const queryText =
    'INSERT INTO quotes (text, quote, page, bookid) VALUES ($1, $2, $3, $4)';
  db.query(queryText, params)
    .then((result) => {
      res.locals.result = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.addQuote', err: err });
    });
};

controller.deleteQuote = (req, res, next) => {
  const id = [req.body._id];
  const queryText = 'DELETE FROM quotes WHERE _id = $1 RETURNING *';
  db.query(queryText, id)
    .then((result) => {
      res.locals.result = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        internalLog: 'error in controller.deleteQuote',
        err: err,
      });
    });
};

module.exports = controller;
