'use strict'

const gen = function*(x) {
  yield x*2
  yield x*3
  yield x*4
}

for(let value of gen(3)) {
  console.log(value)
}
