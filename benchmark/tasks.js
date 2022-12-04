import detectIndentLib from 'detect-indent'
import detectIndentationLib from 'detect-indentation'
import detectJsonIndentLib from 'detect-json-indent'

import guessJsonIndentLib from 'guess-json-indent'

const bigArray = new Array(1e6).fill(true)
const jsonString = JSON.stringify(bigArray, undefined, 2)

export const guessJsonIndent = function () {
  guessJsonIndentLib(jsonString)
}

export const detectIndent = function () {
  detectIndentLib(jsonString)
}

export const detectIndentation = function () {
  detectIndentationLib(jsonString)
}

export const detectJsonIndent = function () {
  detectJsonIndentLib(jsonString)
}
