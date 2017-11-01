var test = require('tape')
var array = require('../')

test('non overflowing', function (t) {
  var arr = array(5)

  arr.push(100)

  t.equals(arr.head, 0, 'head')
  t.equals(arr.tail, 1, 'tail')
  t.equals(arr.length, 1, 'length')
  t.equals(arr.get(0), 100, 'get#0')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 100, 'each#0')
    else t.fail()
  })

  arr.push(200, 300)

  t.equals(arr.head, 0, 'head')
  t.equals(arr.tail, 3, 'tail')
  t.equals(arr.length, 3, 'length')
  t.equals(arr.get(0), 100, 'get#0')
  t.equals(arr.get(1), 200, 'get#1')
  t.equals(arr.get(2), 300, 'get#2')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 100, 'each#0')
    else if (i === 1) t.equals(item, 200, 'each#1')
    else if (i === 2) t.equals(item, 300, 'each#2')
    else t.fail()
  })

  var item = arr.shift()

  t.equals(item, 100)
  t.equals(arr.head, 1, 'head')
  t.equals(arr.tail, 3, 'tail')
  t.equals(arr.length, 2, 'length')
  t.equals(arr.get(0), 200, 'get#0')
  t.equals(arr.get(1), 300, 'get#1')
  t.equals(arr.get(2), undefined, 'get#2')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 200, 'each#0')
    else if (i === 1) t.equals(item, 300, 'each#1')
    else t.fail()
  })

  item = arr.pop()

  t.equals(item, 300)
  t.equals(arr.head, 1, 'head')
  t.equals(arr.tail, 2, 'tail')
  t.equals(arr.length, 1, 'length')
  t.equals(arr.get(0), 200, 'get#0')
  t.equals(arr.get(1), undefined, 'get#1')
  t.equals(arr.get(2), undefined, 'get#2')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 200, 'each#0')
    else t.fail()
  })

  t.end()
})

test('overflowing', function (t) {
  var arr = array(5)
  arr.push(100, 200, 300, 400)

  t.equals(arr.head, 0, 'head')
  t.equals(arr.tail, 4, 'tail')
  t.equals(arr.length, 4, 'length')
  t.equals(arr.get(0), 100, 'get#0')
  t.equals(arr.get(1), 200, 'get#1')
  t.equals(arr.get(2), 300, 'get#2')
  t.equals(arr.get(3), 400, 'get#3')
  t.equals(arr.get(4), undefined, 'get#4')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 100, 'each#0')
    else if (i === 1) t.equals(item, 200, 'each#1')
    else if (i === 2) t.equals(item, 300, 'each#2')
    else if (i === 3) t.equals(item, 400, 'each#3')
    else t.fail()
  })

  arr.push(500)

  t.equals(arr.head, 0, 'head')
  t.equals(arr.tail, 0, 'tail')
  t.equals(arr.length, 5, 'length')
  t.equals(arr.get(0), 100, 'get#0')
  t.equals(arr.get(1), 200, 'get#1')
  t.equals(arr.get(2), 300, 'get#2')
  t.equals(arr.get(3), 400, 'get#3')
  t.equals(arr.get(4), 500, 'get#4')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 100, 'each#0')
    else if (i === 1) t.equals(item, 200, 'each#1')
    else if (i === 2) t.equals(item, 300, 'each#2')
    else if (i === 3) t.equals(item, 400, 'each#3')
    else if (i === 4) t.equals(item, 500, 'each#4')
    else t.fail()
  })

  arr.push(600)

  t.equals(arr.head, 1, 'head')
  t.equals(arr.tail, 1, 'tail')
  t.equals(arr.length, 5, 'length')
  t.equals(arr.get(0), 200, 'get#0')
  t.equals(arr.get(1), 300, 'get#1')
  t.equals(arr.get(2), 400, 'get#2')
  t.equals(arr.get(3), 500, 'get#3')
  t.equals(arr.get(4), 600, 'get#4')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 200, 'each#0')
    else if (i === 1) t.equals(item, 300, 'each#1')
    else if (i === 2) t.equals(item, 400, 'each#2')
    else if (i === 3) t.equals(item, 500, 'each#3')
    else if (i === 4) t.equals(item, 600, 'each#4')
    else t.fail()
  })

  var item = arr.shift()

  t.equals(item, 200)
  t.equals(arr.head, 2, 'head')
  t.equals(arr.tail, 1, 'tail')
  t.equals(arr.length, 4, 'length')
  t.equals(arr.get(0), 300, 'get#0')
  t.equals(arr.get(1), 400, 'get#1')
  t.equals(arr.get(2), 500, 'get#2')
  t.equals(arr.get(3), 600, 'get#3')
  t.equals(arr.get(4), undefined, 'get#4')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 300, 'each#0')
    else if (i === 1) t.equals(item, 400, 'each#1')
    else if (i === 2) t.equals(item, 500, 'each#2')
    else if (i === 3) t.equals(item, 600, 'each#3')
    else t.fail()
  })

  item = arr.pop()

  t.equals(item, 600)
  t.equals(arr.head, 2, 'head')
  t.equals(arr.tail, 0, 'tail')
  t.equals(arr.length, 3, 'length')
  t.equals(arr.get(0), 300, 'get#0')
  t.equals(arr.get(1), 400, 'get#1')
  t.equals(arr.get(2), 500, 'get#2')
  t.equals(arr.get(3), undefined, 'get#3')
  t.equals(arr.get(4), undefined, 'get#4')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 300, 'each#0')
    else if (i === 1) t.equals(item, 400, 'each#1')
    else if (i === 2) t.equals(item, 500, 'each#2')
    else t.fail()
  })

  item = arr.pop()

  t.equals(item, 500)
  t.equals(arr.head, 2, 'head')
  t.equals(arr.tail, 4, 'tail')
  t.equals(arr.length, 2, 'length')
  t.equals(arr.get(0), 300, 'get#0')
  t.equals(arr.get(1), 400, 'get#1')
  t.equals(arr.get(2), undefined, 'get#2')
  t.equals(arr.get(3), undefined, 'get#3')
  t.equals(arr.get(4), undefined, 'get#4')

  arr.forEach(function (item, i) {
    if (i === 0) t.equals(item, 300, 'each#0')
    else if (i === 1) t.equals(item, 400, 'each#1')
    else t.fail()
  })

  t.end()
})
