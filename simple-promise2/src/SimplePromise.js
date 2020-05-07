function SimplePromise (fnPassedIn) {
  this.then = function(thenCallback) {
    function resolve(resolveObj) {
      thenCallback(resolveObj)
    }

    fnPassedIn(resolve)
  }
}

module.exports = SimplePromise;
