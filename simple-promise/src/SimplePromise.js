function SimplePromise (fnPassedIn) {
  this.then = getThenFunction(fnPassedIn);
}

function getThenFunction(fnPassedIn) {
  return function then(thenCallback) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    fnPassedIn.call(null, getResolve(thenCallback));
  }
}

function getResolve (thenCallback) {
  return function resolve(resolvedObj) {
    thenCallback(resolvedObj);
  }
}


module.exports = SimplePromise;
