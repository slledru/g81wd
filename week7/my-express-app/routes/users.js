var express = require('express');
var router = express.Router();

/* examples:
  http GET http://localhost:3000/users/212/hello?type=mutt day="thurs" name="sukmi"
  http POST http://localhost:3000/users/212/hello?type=mutt day="thurs" name="sukmi"
  http PUT http://localhost:3000/users/212/hello?type=mutt day="thurs" name="sukmi"
  http DELETE http://localhost:3000/users/212/hello?type=mutt day="thurs" name="sukmi"

  response:
    HTTP/1.1 200 OK
    Connection: keep-alive
    Content-Length: 119
    Content-Type: application/json; charset=utf-8
    Date: Thu, 22 Mar 2018 20:18:54 GMT
    ETag: W/"77-qJmWpkbN7LOL8MKxXWI3iR5bOR4"
    X-Powered-By: Express

    {
        "data": {
            "day": "thurs",
            "name": "sukmi"
        },
        "method": "put",
        "params": {
            "greeting": "hello",
            "id": "212"
        },
        "query": {
            "type": "mutt"
        }
    }
 */
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ data: req.body, method: 'post', query: req.query, params: req.params});
});

router.get('/:id/:greeting', function(req, res, next) {
  res.send({ data: req.body, method: 'post', query: req.query, params: req.params});
});

router.post('/', function(req, res, next) {
  res.send({ data: req.body, method: 'post', query: req.query, params: req.params});
});

router.post('/:id/:greeting', function(req, res, next) {
  res.send({ data: req.body, method: 'post', query: req.query, params: req.params});
});

router.put('/', function(req, res, next) {
  res.send({ data: req.body, method: 'put', query: req.query, params: req.params});
});

router.put('/:id/:greeting', function(req, res, next) {
  res.send({ data: req.body, method: 'put', query: req.query, params: req.params});
});

router.delete('/', function(req, res, next) {
  res.send({ data: req.body, method: 'delete', query: req.query, params: req.params});
});

router.delete('/:id/:greeting', function(req, res, next) {
  res.send({ data: req.body, method: 'delete', query: req.query, params: req.params});
});

module.exports = router;
