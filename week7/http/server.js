const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const PORT = 8181

const getParams = (queryString) => {
  // ?name=Cassie&type=mutt
  let params = {}
  if (queryString) {
    // params = queryString
    //   .split('&')
    //   .map(line => line.split('='))
    //   .reduce((params, pair) => {
    //     params[pair[0]] = pair[1]
    //     return params
    //   }, {})

    params = queryString
      .split('&')
      .map(line => line.split('='))
      .reduce((params, pair) => {
        params[pair[0]] = pair[1]
        return params
      }, {})
  }
  return params
}
const server = http.createServer(function(req,res){
  //console.log(req.method, req.url)
  let parsedUrl = url.parse(req.url)
  let { pathname, query } = parsedUrl
  const params = getParams(query)
  console.log(params);
  const filename = (pathname === '/dogs') ?
    path.join(__dirname, 'dogs.html') :
    path.join(__dirname, 'index.html')

  fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    res.end(data)
  })
})

server.listen(PORT, function(err){
  console.log(`server started on ${PORT}!`);
})
