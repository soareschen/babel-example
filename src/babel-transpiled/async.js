'use strict'

process.on('unhandledRejection', err =>
  console.error('unhandled rejection:', err))

const timeout = time =>
  new Promise(resolve =>
    setTimeout(resolve, time))

const helloAsync = async function() {
  console.log('hello')
  await timeout(1000)
  console.log('world')
}

helloAsync()
