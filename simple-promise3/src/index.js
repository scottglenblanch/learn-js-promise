const axios = require('axios');

var SimplePromise = require('./SimplePromise');

new SimplePromise(function(resolve) {
  axios
  .get('https://www.google.com')
  .then(response => {
    resolve(response.data)
  })
})
.then(x => {
  console.log(x);
});
