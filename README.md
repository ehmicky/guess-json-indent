[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/guess-json-indent)
[![Browsers](https://img.shields.io/badge/-Browsers-808080?logo=firefox&colorA=404040)](https://unpkg.com/guess-json-indent?module)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/src/main.d.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/guess-json-indent)
[![Minified size](https://img.shields.io/bundlephobia/minzip/guess-json-indent?label&colorA=404040&colorB=808080&logo=webpack)](https://bundlephobia.com/package/guess-json-indent)
[![Mastodon](https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9)](https://fosstodon.org/@ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

Guess the indentation of a JSON string.

# Hire me

Please
[reach out](https://www.linkedin.com/feed/update/urn:li:activity:7117265228068716545/)
if you're looking for a Node.js API or CLI engineer (11 years of experience).
Most recently I have been [Netlify Build](https://github.com/netlify/build)'s
and [Netlify Plugins](https://www.netlify.com/products/build/plugins/)'
technical lead for 2.5 years. I am available for full-time remote positions.

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

This package works in both Node.js >=16.17.0 and
[browsers](https://raw.githubusercontent.com/ehmicky/dev-tasks/main/src/browserslist).

This is an ES module. It must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`. If TypeScript is used, it must be configured to
[output ES modules](https://www.typescriptlang.org/docs/handbook/esm-node.html),
not CommonJS.

# API

## guessJsonIndent(jsonString)

The return value is the same as the third argument to `JSON.stringify()`:

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
<table><tr><td align="center"><a href="https://fosstodon.org/@ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/guess-json-indent/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/guess-json-indent/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>
 -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
