function SimplePromise (fnPassedIn) {
  this.then = getThenFunction(fnPassedIn);
}

function getThenFunction(fnPassedIn) {
  return function then(thenCallback) {
    fnPassedIn.call(null, getResolve(thenCallback));
  }
}

function getResolve (thenCallback) {
  return function resolve(resolvedObj) {
    thenCallback(resolvedObj);
  }
}


module.exports = SimplePromise;
