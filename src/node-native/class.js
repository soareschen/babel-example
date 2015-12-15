'use strict'

class Foo {
  constructor() {
    console.log('init foo')
  }

  speak() {
    console.log('foo')
  }
}

class Bar extends Foo {
  speak() {
    console.log('bar')
  }
}

const bar = new Bar()
bar.speak()
