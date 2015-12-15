# Running ES2015 code with Node v5 and Babel 6

## Node v5 ES6 Support

- Full list: https://nodejs.org/en/docs/es6/
- [Block Scoping](lib/node-native/block-scoping.js)
- [Arrow Function](lib/node-native/arrow.js)
- [Class](lib/node-native/class.js)
- [Generator](lib/node-native/generator.js)
- [Symbol](lib/node-native/symbol.js)
- [Spread Operator](lib/node-native/spread.js)

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
- Build with default preset: `babel --preset es2015 --out-dir out src`
- Other presets: `babel --preset stage-0 --out-dir out src`
  - Need to `npm install babel-preset-stage-0`
- Multiple presets: `babel --preset es2015,react --out-dir out src`

## Plugins

- Presets = collection of plugins
- Plugin = individual feature to transpile
- Install: `npm install babel-plugin-syntax-async-functions`
- Usage: `babel --plugin syntax-async-functions --preset es2015 --out-dir out src`

## Custom Presets

- You can create your own presets and publish it. Example at [`preset/node-preset`](preset/node-preset).
- When including custom preset, use full name/path. i.e. `babel --preset './preset/node-preset' --out-dir out src`

## .babelrc

- Alternative way to include options like presets. [Example](.babelrc)
- With that you can run command like `babel --out-dir out src` again.
