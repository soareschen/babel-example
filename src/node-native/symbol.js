'use strict'

const $foo = Symbol('foo')

const object = {
  foo: 'bar',

  [$foo]: 'baz'
}

console.log('object.foo:', object.foo)
console.log('object[$foo]:', object[$foo])
