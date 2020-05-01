function SimplePromise (fnPassedIn) {
  this.then = function(thenCallback) {
    fnPassedIn.call(null, function(resolveObj) {
      thenCallback(resolveObj)
    })
  }
}

module.exports = SimplePromise;
