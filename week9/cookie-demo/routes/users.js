const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  let visits = req.cookies.visits || 0

  // setting a cookie
  res.cookie('test', 'I do like cookies')
  res.cookie('visits', ++visits)
  res.cookie('username', 'sukmi')

  // getting it back
  console.log(`I do like ${res.cookies}`)

  res.send('respond with a resource')
})

module.exports = router
