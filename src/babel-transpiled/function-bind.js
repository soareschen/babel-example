'use strict'

const greet = function() {
  console.log('hello,', this.name)
}

const person = {
  name: 'John'
}

person::greet()
