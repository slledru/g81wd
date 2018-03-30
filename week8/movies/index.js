const env = 'development'
const config = require('./knexfile.js')[env]
const knex = require('knex')(config)

knex('movies')
  .insert({
    title: 'Deadpool',
    duration: 108,
    rating: 'R',
    genre: 'Action',
    is_3d: false,
    released_at: new Date('2016-02-12 00:00:00 UTC'),
    score: 8.2
  }, '*')
  .then((result) => {
    console.log(result)
    knex.destroy()
  })
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })

  knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  // .where('id', 4)
  .where('score', '>=', 7.5)
  .where({ rating: 'PG', is_3d: true })
  .orWhere('title', 'Pulp Fiction')
  .orderBy('score', 'DESC')
  .limit(1)
  .then((result) => {
    console.log(result)
    knex.destroy()
  })
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
