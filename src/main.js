// Guess the indentation of a JSON string
export default function guessJsonIndent(jsonString) {
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

// Whitespaces are ignored before|between|after tokens in JSON
const skipWhitespaces = function (jsonString, startIndex) {
  // eslint-disable-next-line fp/no-loops, fp/no-mutation, fp/no-let
  for (let index = startIndex; index < jsonString.length; index += 1) {
    const character = jsonString[index]

    // eslint-disable-next-line max-depth
    if (!isJsonWhitespace(character)) {
      return index
    }
  }
}

// JSON defines only those are valid whitespaces
const isJsonWhitespace = function (character) {
  return (
    character === ' ' ||
    character === '\t' ||
    character === '\n' ||
    character === '\r'
  )
}

// If the top-level value is another type than an object or an array, there is
// no possible indentation
const isJsonObjectOrArray = function (character) {
  return character === '{' || character === '['
}

// eslint-disable-next-line complexity, max-statements
const getIndent = function (jsonString, firstIndex, secondIndex) {
  // eslint-disable-next-line fp/no-let, init-declarations
  let indent

  // eslint-disable-next-line fp/no-loops, fp/no-let, fp/no-mutation
  for (let index = secondIndex - 1; index > firstIndex; index -= 1) {
    const character = jsonString[index]

    // eslint-disable-next-line max-depth
    if (character === '\r') {
      return
    }

    // eslint-disable-next-line max-depth
    if (character === '\n') {
      // eslint-disable-next-line max-depth
      if (indent === undefined) {
        return 0
      }

      return indent[0] === ' ' ? indent.length : indent
    }

    // eslint-disable-next-line max-depth
    if (indent === undefined) {
      // eslint-disable-next-line fp/no-mutation
      indent = character
    } else if (indent[0] === character) {
      // eslint-disable-next-line fp/no-mutation
      indent += character
    } else {
      return
    }
  }
}
