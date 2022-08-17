[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/guess-json-indent.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/guess-json-indent)
[![Node](https://img.shields.io/node/v/guess-json-indent.svg?logo=node.js)](https://www.npmjs.com/package/guess-json-indent)
[![TypeScript](https://img.shields.io/badge/-typed-brightgreen?logo=typescript&colorA=gray&logoColor=0096ff)](/src/main.d.ts)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-brightgreen.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-brightgreen.svg?logo=medium)](https://medium.com/@ehmicky)

Guess the indentation of a JSON string.

# Example

```js
import guessJsonIndent from 'guess-json-indent'

const input = [{ example: true }]
guessJsonIndent(JSON.stringify(input)) // undefined
guessJsonIndent(JSON.stringify(input, undefined, 1)) // 1
guessJsonIndent(JSON.stringify(input, undefined, 2)) // 2
guessJsonIndent(JSON.stringify(input, undefined, 4)) // 4
guessJsonIndent(JSON.stringify(input, undefined, '\t')) // '\t'
guessJsonIndent(JSON.stringify(input, undefined, '\t\t')) // '\t\t'

// Keep the indentation of a JSON string when parsing/serializing it
const jsonString = JSON.stringify(input, undefined, 2)
const indent = guessJsonIndent(jsonString)
const parsedValue = JSON.parse(jsonString)
console.log(JSON.stringify(input, undefined, indent)) // Same as jsonString
```

# Install

```bash
npm install guess-json-indent
```

This package is an ES module and must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`.

# API

## guessJsonIndent(jsonString)

The return value is the same as the third argument to `JSON.serialize()`:

- `undefined`: none
- integer: number of spaces
- string: tabs

# Benchmarks

This library is very fast thanks to:

- Looking only at the first indented line, which is sufficient in the vast
  majority of real-life cases
- Being specific to JSON

The following benchmarks compares it:

- With [`detect-indent`](https://github.com/sindresorhus/detect-indent),
  [`detect-json-indent`](https://github.com/mapbox/detect-json-indent) and
  [`detect-indentation`](https://github.com/bevry/detect-indentation)
- On a big JSON string (8MB)

```
guess-json-indent:         43ns
detect-json-indent:  60114470ns
detect-indentation: 141975495ns
detect-indent:      198161087ns
```

# Related projects

- [`truncate-json`](https://github.com/ehmicky/truncate-json): Truncate a JSON
  string
- [`is-json-value`](https://github.com/ehmicky/is-json-value): Check if a value
  is valid JSON
- [`safe-json-value`](https://github.com/ehmicky/safe-json-value): ⛑️ JSON
  serialization should never fail

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<!--
<table><tr><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/guess-json-indent/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/guess-json-indent/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>
 -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
