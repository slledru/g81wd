## Checklist for Setting up Express Server
#### Setup Development Environment
1. These are the npm modules needed for production.&nbsp;&nbsp;Use one of the followings.
```
npm install

npm init -y
npm install xxxxx --save
```
```
express
body-parser
boom
cookie-parser
joi
express-validation
bcrypt
jsonwebtoken
morgan
knex
pg
humps
```
2. These are the npm modules needed for development only.
```
npm install

npm init -y
npm install xxxxx --save-dev
```
```
chai
mocha
dotenv
nodemon
supertest
```
3. Define scripts in package.json.
```
"scripts": {
  "heroku-postbuild": "knex migrate:latest; knex seed:run",
  "knex": "knex",
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "mocha"
}
```
4. For deploying to Heroku, add the following in package.json.
```
"engines": {
  "node": "9.8.0"
}
```
5. You may not need "heroku-postbuild" script in package.json each time you push the latest to Heroku if you do not wish to recreate database tables.

#### Setup Database
1. On command line, run 'createdb' with database name
1. Create knex configuration in knexfile.js
```javascript
development: {
  client: 'pg',
  connection: 'postgres://localhost/g_message_dev'
},

test: {
  client: 'pg',
  connection: 'postgres://localhost/g_message_test'
},

production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
```
3. Create migration file using 'knex migrate:make createXxxxTable'.&nbsp;&nbsp;Create as many migration files as the database tables you have.
```
return knex.schema.createTable('messages', (table) => {
  table.increments()
  table.varchar('name', 255).notNullable()
  table.varchar('message', 255).notNullable()
  table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
  table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
})
```
4. Create seed file using 'knex seed:make 001_insertXxxx'.&nbsp;&nbsp;Create as many seed files as the database tables you want to populate with data.
```
return knex('messages').del()
  .then(() => {
    // Inserts seed entries
    return knex('messages').insert([
      {
        id: 1,
        name: 'Criminal',
        message: 'What Are You?',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ])
  })
  .then(() => {
    return knex.raw(`SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));`)
  })
```
5. Run migrations in order to create database schema
1. Run seeds in order to populate initial data in the database tables.&nbsp;&nbsp;This is optional for production system.

#### Create Routes
1. Express Server
```
const express = require('express')
const app = express()
```
2. Setup Middleware
```
const bodyParser = require('body-parser')
app.use(bodyParser.json())
```
3. Setup Routes
```
const messages = require('./routes/messages')
app.use('/messages', messages)
```
4. Setup Static Routes
```
const path = require('path')
app.use(express.static(path.join(__dirname, '.')))
```
5. Start Server on a Port
```
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Listening on port', port)
})
```

#### Default Error Handlers
1. Routes are not defined and returns 'Page Not Found' status.
```
app.use((req, res, next) => {
  res.sendStatus(404)
})
```
2. All the other error conditions are routed to the following code.
```
app.use((err, req, res, next) => {
  res.sendStatus(err.status || 500)
})
```

#### Implement Routes
1. For each route, create a file 'xxxxx.js' and include the following code at the top and the bottom of the file.
```
const express = require('express')
const router = express.Router()
```
```
module.exports = router
```
2. Implement routes for get, post, put/patch, and delete.
```
router.get('/', (req, res, next) => {
  // Your code here
})

router.get('/:id', (req, res, next) => {
  // Your code here
})

router.post('/', (req, res, next) => {
  // Your code here
})

router.put('/:id', (req, res, next) => {
  // Your code here
})

router.patch('/:id', (req, res, next) => {
  // Your code here
})

router.delete('/:id', (req, res, next) => {
  // Your code here
})
```
