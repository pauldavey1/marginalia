const { Media, Note } = require('../models/dbModel.js');

const controller = {};

controller.getMedia = (req, res, next) => {
  Media.find({})
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.getMedia', err: err });
    });
};

controller.addMedia = (req, res, next) => {
  const newMedia = new Media({
    title: req.body.title,
    author: req.body.author,
    // add additional language for ISBN, etc.: isNaN(parseInt(req.body.isbn13)) ? null : parseInt(req.body.isbn13),
  });
  newMedia
    .save()
    .then((result) => {
      res.locals.result = result._id;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.addMedia', err: err });
    });
};

controller.deleteMedia = (req, res, next) => {
  const id = [req.body._id];
  // delete media's associated notes/quotes first
  Note.deleteMany({ mediaId: id }).catch((err) => {
    return next({
      internalLog: 'error deleting notes in controller.deleteMedia',
      err: err,
    });
  });
  // then delete media
  Media.findByIdAndDelete(id)
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => {
      return next({
        internalLog: 'error deleting book in controller.deleteMedia',
        err: err,
      });
    });
};

// for BookTitle component (which belongs to QuoteCreator component)
controller.getMediaTitle = (req, res, next) => {
  const id = [req.params.id];
  Media.findById(id)
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => {
      return next({
        internalLog: 'error in controller.getMediaTitle',
        err: err,
      });
    });
};

controller.getQuotes = (req, res, next) => {
  const id = [req.params.id];
  Note.find({ mediaId: id })
    .sort('page')
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.getQuotes', err: err });
    });
};

controller.addQuote = (req, res, next) => {
  const { text, isQuote, page, mediaId } = req.body;
  const newNote = new Note({
    text,
    isQuote,
    page,
    mediaId,
  });
  newNote
    .save()
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => {
      return next({ internalLog: 'error in controller.addQuote', err: err });
    });
};

controller.deleteQuote = (req, res, next) => {
  const id = [req.body._id];
  Note.findByIdAndDelete(id)
    .then((result) => {
      res.locals.result = result;
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
