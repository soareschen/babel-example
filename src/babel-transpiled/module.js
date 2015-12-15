import { readFileSync } from 'fs'

export const readSource = () =>
  readFileSync(__filename, 'utf8')

console.log(readSource())
