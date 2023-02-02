const express = require('express');
const controller = require('../controllers/dbController.js');
const router = express.Router();

router.get('/', controller.getBooks, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.post('/', controller.addBook, (req, res) => {
  return res.status(201).json(res.locals.result);
});

router.delete('/', controller.deleteBook, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.get('/:id', controller.getQuotes, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.post('/quotes', controller.addQuote, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.delete('/quotes', controller.deleteQuote, (req, res) => {
  return res.status(200).json(res.locals.result);
});

module.exports = router;
