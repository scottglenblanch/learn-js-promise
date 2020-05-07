function SimplePromise (fnPassedIn) {
  this.then = getThenFunction(fnPassedIn);
}

function getThenFunction(fnPassedIn) {
  return function then(thenCallback) {
    fnPassedIn(getResolveFn(thenCallback));
  }
}

function getResolveFn (thenCallback) {
  return function resolveFn(resolvedObj) {
    thenCallback(resolvedObj);
  }
}


module.exports = SimplePromise;
