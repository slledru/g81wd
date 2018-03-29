axios.get('http://localhost:3000/snacks') // your API domain
  .then(function (response) {
    console.log(response);
  })
  .catch((ex) => {
    console.log(ex);
  })
