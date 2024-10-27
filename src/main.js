// Guess the indentation of a JSON string
const guessJsonIndent = (jsonString) => {
  const firstIndex = skipWhitespaces(jsonString, 0)

  if (
    firstIndex === undefined ||
    !isJsonObjectOrArray(jsonString[firstIndex])
  ) {
    return
  }

  const secondIndex = skipWhitespaces(jsonString, firstIndex + 1)

  if (secondIndex === undefined) {
    return
  }

  return getIndent(jsonString, firstIndex, secondIndex)
}

export default guessJsonIndent

// Whitespaces are ignored before|between|after tokens in JSON.
// Uses imperative logic for performance.
/* eslint-disable fp/no-loops, fp/no-mutation, fp/no-let, max-depth */
const skipWhitespaces = (jsonString, startIndex) => {
  for (let index = startIndex; index < jsonString.length; index += 1) {
    const character = jsonString[index]

    if (!isJsonWhitespace(character)) {
      return index
    }
  }
}
/* eslint-enable fp/no-loops, fp/no-mutation, fp/no-let, max-depth */

// JSON defines only those are valid whitespaces
const isJsonWhitespace = (character) =>
  character === ' ' ||
  character === '\t' ||
  character === '\n' ||
  character === '\r'

// If the top-level value is another type than an object or an array, there is
// no possible indentation
const isJsonObjectOrArray = (character) =>
  character === '{' || character === '['

// Uses imperative logic for performance
/* eslint-disable max-statements, fp/no-let, init-declarations,
   fp/no-loops, fp/no-mutation, max-depth */
const getIndent = (jsonString, firstIndex, secondIndex) => {
  let indent

  for (let index = secondIndex - 1; index > firstIndex; index -= 1) {
    const character = jsonString[index]

    if (character === '\r') {
      return
    }

    if (character === '\n') {
      return normalizeIndent(indent)
    }

    if (indent === undefined) {
      indent = character
    } else if (indent[0] === character) {
      indent += character
    } else {
      return
    }
  }
}
/* eslint-enable max-statements, fp/no-let, init-declarations,
   fp/no-loops, fp/no-mutation, max-depth */

// Ensure the return value can be passed as `JSON.stringify()` third argument
const normalizeIndent = (indent) => {
  if (indent === undefined) {
    return 0
  }

  return indent[0] === ' ' ? indent.length : indent
}
