'use strict'

const joinArgs = (opts, ...args) => {
  const { separator='-' } = opts
  return args.join(separator)
}

const result = joinArgs({
  separator: ', '
}, 'foo', 'bar', 'baz')

console.log(result)
