const express = require('express')
const app = express() // this is a function call
const PORT = 8181

// do stuff
app.use((req, res, next) => {
  console.log(req.params);
  console.log(`Time: ${Date.now()}`)
  next()
})
app.use((req, res, next) => {
  console.log('first')
  next()
})
app.use((req, res, next) => {
  console.log('second')
  next()
})
app.use((req, res, next) => {
  console.log('third')
  next()
})

app.get('/', (req, res, next) => {
  res.send(`Hello ${req.query.name} from g81`)
  next()
})

app.get('/:name', (req, res, next) => {
  res.send(`Hello ${req.params.name} from g81`)
  next()
})

app.use((req, res, next) => {
  console.log('after send')
  next()
})
// app.post('/trails', (req, res) => {
//   res.send('creating')
// })
// app.get('/trails', (req, res) => {
// })
// app.get('/trails/:id', (req, res) => {
// })
// app.put('/trails/:id', (req, res) => {
// })
// app.delete('/trails/:id', (req, res) => {
// })


app.listen(PORT, (err) => {
  if (err) {
    console.error('something bad happened', err)
    return
  }
  console.log(`server started on ${PORT}`);
})
