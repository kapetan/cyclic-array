# cyclic-array

Simple circular array (buffer) implementation

    npm install cyclic-array

## Usage

Underneath a fixed sized array is used to store the values. Writing beyond the capacity of the array overwrites values at the lowest index.

```javascript
var cyclicArray = require('cyclic-array')

var array = cyclicArray(7)

array.push(10)
array.push(20, 30)

array.forEach(function (item, i) {
  // iterate 10, 20, 30
})

array.get(1)   // returns 20

array.length   // returns 3
array.pop()    // returns 30
array.shift()  // returns 10
```
