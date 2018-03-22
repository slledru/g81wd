const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 8080

const app = express()

app.use(morgan())
app.use(bodyParser())

app.get('/', (req, res) => {
  res.send({ method: 'get', data: req.body, params: req.params, query: req.query })
})

app.get((req, res, next) => {
  next({ status: 404, message: 'Page is not found' })
})

app.get((err, req, res, next) => {
  res.status(err.status).send({ error: err })
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(`Server started successfully on port ${port}`);
})
