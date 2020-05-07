function SimplePromise (fnPassedIn) {
  this.then = function(thenCallback) {
    fnPassedIn(function(resolveObj) {
      thenCallback(resolveObj)
    })
  }
}

module.exports = SimplePromise;
