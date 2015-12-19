# Running ES2015 code with Node v5 and Babel 6

## Node v5 ES6 Support

- Full list: https://nodejs.org/en/docs/es6/
- [Block Scoping](src/node-native/block-scoping.js)
- [Arrow Function](src/node-native/arrow.js)
- [Class](src/node-native/class.js)
- [Generator](src/node-native/generator.js)
- [Symbol](src/node-native/symbol.js)
- [Spread Operator](src/node-native/spread.js)

## Babel v6 Installation

- Many different packages. Build tools, presets, plugins, etc.
- Install build tool: `npm install -g babel-cli`
- Install preset, i.e. `npm install babel-preset-es2015`
- Install plugin, i.e. `npm install babel-plugin-transform-async-to-generator`

## Compilation

- My approach: `babel [options] --out-dir out src`
  - `src` directory for ESNext source files.
  - `out` directory for transpiled code.
  - Easier debugging.
- The command `babel --out-dir out src` alone transpiles nothing!
- Build with default preset: `babel --presets es2015 --out-dir out src`
- Other presets: `babel --presets stage-0 --out-dir out src`
  - Need to `npm install babel-preset-stage-0`
- Multiple presets: `babel --presets es2015,react --out-dir out src`

## Plugins

- Presets = collection of plugins
- Plugin = individual feature to transpile
- Install: `npm install babel-plugin-transform-async-to-generator`
- Usage: `babel --plugins transform-async-to-generator --presets es2015 --out-dir out src`

## Custom Presets

- You can create your own presets and publish it. Example at [`preset/node-preset`](preset/node-preset).
- When including custom preset, use full name/path. i.e. `babel --presets './preset/node-preset' --out-dir out src`

## .babelrc

- Alternative way to include options like presets. ([Example](.babelrc-example))
- With that you can run command like `babel --out-dir out src` again.

## Quirks

- Have to update many package dependencies.
- Be careful with misspelling command line options, i.e. `babel --preset es2015 --out-dir out src` (missing "s" in "presets")
