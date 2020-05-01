# Simple Promise
This is my personal attempt at creating an extremely simple promise.
The promise only is able to resolve; it's can't reject. 

This is an exercise in understanding promises and their relationship to callbacks. 

## Run
In root directory
```
node ./src/index.js
```

The code will take about 2 seconds to have output.

As I understand it, a promise can be made with the use of closures and 
[call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 
or [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) in Javascript's function api. 