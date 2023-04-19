const express = require('express');
const controller = require('../controllers/dbController.js');
const router = express.Router();

router.get('/', controller.getMedia, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.post('/', controller.addMedia, (req, res) => {
  return res.status(201).json(res.locals.result);
});

router.delete('/', controller.deleteMedia, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.get('/:id/title', controller.getMediaTitle, (req, res) => {
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
