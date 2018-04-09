const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const KEY = process.env.KEY

// router.use((req, res, next) => {
//   console.log('you are in the /users path')
//   if (!req.cookies.user) {
//     res.redirect('/')
//   }
//   else {
//     next()
//   }
// })

const isAuthenticated = (req, res, next) => {
  if (req.cookies.user) {
    jwt.verify(req.cookies.user, KEY, (err, payload) => {
      if (err) {
        next(err)
      }
      else {
        req.user = payload
        next()
      }
    })
  }
  else {
    res.redirect('/')
  }
}

/* GET users listing. */
router.get('/', isAuthenticated, (req, res, next) => {
  // need to fix something
  let user = req.user
  user.visits++
  console.log('payload', user)

  let signedUser = jwt.sign(user, KEY)
  console.log('signedUser', signedUser)

  // setting a cookie
  res.cookie('user', signedUser)

  res.send('cookie/jwt demo see dev tools')
})

module.exports = router
