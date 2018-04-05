const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const KEY = process.env.KEY

/* GET users listing. */
router.get('/', (req, res, next) => {
  // need to fix something
  let user = {}
  if (req.cookies.user) {
    jwt.verify(req.cookies.user, KEY, (err, payload) => {
      if (err) {
        next(err)
      }
      else {
        user = payload
        user.visits++
        console.log('payload', user)
      }
    })
  }
  else {
    user.visits = 1
    user.name = 'Kinzie!!!'
  }

  let signedUser = jwt.sign(user, KEY)
  console.log('signedUser', signedUser)

  // setting a cookie
  res.cookie('user', signedUser)

  res.send('cookie/jwt demo see dev tools')
})

module.exports = router
