import detectIndentLib from 'detect-indent'
import detectIndentationLib from 'detect-indentation'
import detectJsonIndentLib from 'detect-json-indent'
import guessJsonIndentLib from 'guess-json-indent'

const bigArray = new Array(1e6).fill(true)
const jsonString = JSON.stringify(bigArray, undefined, 2)

export const guessJsonIndent = () => {
  guessJsonIndentLib(jsonString)
}

export const detectIndent = () => {
  detectIndentLib(jsonString)
}

export const detectIndentation = () => {
  detectIndentationLib(jsonString)
}

export const detectJsonIndent = () => {
  detectJsonIndentLib(jsonString)
}
