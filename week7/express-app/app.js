const express = require('express');

const app = express()
const port = 3000

app.use(logger)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(loggerForDogs)
app.get('/dogs', (req, res) => {
  // console.log(req.query);
  res.send('hey, dog lover')
})

app.use(loggerForCats)
app.get('/cats', (req, res) => {
  // console.log(req.query);
  res.send('hey, cat lover')
})

app.param('name', (req, res, next, value) => {
  console.log('name', req, res, next, value);
})
app.param('type', (req, res, next, value) => {
  console.log('type', req, res, next, value);
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`Web server started successfully on ${port}`);
  }
});

function logger(req, res, next) {
  console.log('logger');
  next()
}

function loggerForDogs(req, res, next) {
  console.log('loggerForDogs');
  next()
}

function loggerForCats(req, res, next) {
  console.log('loggerForCats');
  next()
}
