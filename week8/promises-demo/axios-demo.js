const axios = require('axios')
const chalk = require('chalk')

// Demo 01: Just get authors
function demo01() {
  axios.get('http://poetrydb.org/author')
    .then((result) => {
      const { authors } = result.data
      authors.forEach((author) => console.log(author))
    })
    .catch((err) => {
      console.log(chalk.bgRed(err))
    })
}

// Demo 02: Extract authors and turn them into URLs for the titles
function demo02() {
  axios.get('http://poetrydb.org/author')
    .then(result => result.data.authors)
    .then(authors => authors.map(author => `http://poetrydb.org/author/${encodeURIComponent(author)}/title`))
    .then(titleURLs => titleURLs.forEach(url => console.log(url)))
    .catch(err => console.log(chalk.bgRed(err)))
}

// Demo 03: Promise.all()
function demo03() {
  axios.get('http://poetrydb.org/author')
    .then(result => result.data.authors)
    .then(authors => authors.map(author => `http://poetrydb.org/author/${encodeURIComponent(author)}/title`))
    .then(titleURLs => titleURLs.map(titleURL => axios.get(titleURL)))
    .then(promises => Promise.all(promises))
    .then(results => results.map(result => result.data))
    .then(titles => titles.forEach(title => console.log(title)))
    .catch(err => console.log(chalk.bgRed(err)))
}

// demo01()
// demo02()
demo03()
