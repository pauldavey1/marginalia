const path = require('path');
const express = require('express');
const router = require('./routes/api.js');
const app = express();
const PORT = 3000;

// parse request body
app.use(express.json());

// test get request to index
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '..', 'build', 'index.html'))
);

app.get('/bundle.js', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '..', 'build', 'bundle.js'))
);

// static request handler (stylesheets, etc.)
app.use(express.static(path.resolve(__dirname, '../client')));

// pass api requests to router
app.use('/api', router);

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

module.exports = app;
