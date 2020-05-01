const SimplePromise = require('./SimplePromise');

new SimplePromise(function(resolve) {
  setTimeout(function() {
    resolve('this is the resolved piece');
  }, 2000)
})
.then(x => {
  console.log(x);
});