const express = require('express');
const controller = require('../controllers/dbController.js');
const router = express.Router();

router.get('/', controller.getBooks, (req, res) => {
  return res.status(200).json(res.locals.result);
});

module.exports = router;
