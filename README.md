```javascript
var concatObjects = require('simple-concat-objects')
var streamFromArray = require('from2-array').obj
var assert = require('assert')

var array = [{ a: 1 }, { b: 2 }, { c: 3 }]

concatObjects(streamFromArray(array), function (error, objects) {
  assert(error === null)
  assert(objects.length === array.length)
  assert(objects[0] === array[0])
  assert(objects[1] === array[1])
  assert(objects[2] === array[2])
})
```

Inspired by Feross Aboukhadijeh's [simple-concat](https://www.npmjs.com/package/simple-concat) for binary streams.
