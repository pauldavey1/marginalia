const path = require('path');
const express = require('express');
// const apiRouter = require('./routes/api');
const app = express();
const PORT = 3000;

// parse request body
app.use(express.json());

// test get request to index
app.get('/', res.status(200).send('../client/index.html'));

// define route handlers
// app.use('/api', apiRouter);

// 404 route handler
app.use((req, res) => res.status(404).send('Error: page not found'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    internalLog: 'Express global error handler caught unknown error',
    status: 500,
    message: { err: 'An unknown error occured' },
  };
  const error = Object.assign({}, defaultErr, err);
  console.log(error.internalLog);
  return res.status(error.status).json(error.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
