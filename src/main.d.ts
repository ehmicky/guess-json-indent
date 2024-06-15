// Any character which might start a new JSON token
type JsonTokenStart =
  // Array
  | '['
  // Object
  | '{'
  // String
  | '"'
  // Number
  | '-'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  // Boolean
  | 't'
  | 'f'
  // null
  | 'n'

// Common top-level JSON values in full
type JsonTokenFull = '[]' | '{}' | 'true' | 'false' | 'null'

// JSON allows both CR and CRLF newlines
type Newline = '\n' | '\r\n'

// Common start of a JSON indented string
type IndentedTokenStart = `${'[' | '{'}${Newline}`

/**
 * Guess the indentation of a JSON string.
 * The return value is the same as the third argument to `JSON.stringify()`.
 *
 *  - `undefined`: none
 *  - integer: number of spaces
 *  - string: tabs
 *
 * @example
 * ```js
 * const input = [{ example: true }]
 * guessJsonIndent(JSON.stringify(input)) // undefined
 * guessJsonIndent(JSON.stringify(input, undefined, 1)) // 1
 * guessJsonIndent(JSON.stringify(input, undefined, 2)) // 2
 * guessJsonIndent(JSON.stringify(input, undefined, 4)) // 4
 * guessJsonIndent(JSON.stringify(input, undefined, '\t')) // '\t'
 * guessJsonIndent(JSON.stringify(input, undefined, '\t\t')) // '\t\t'
 *
 * // Keep the indentation of a JSON string when parsing/serializing it
 * const jsonString = JSON.stringify(input, undefined, 2)
 * const indent = guessJsonIndent(jsonString)
 * const parsedValue = JSON.parse(jsonString)
 * console.log(JSON.stringify(input, undefined, indent)) // Same as jsonString
 * ```
 */
// Does a best effort to guess the return value from the type only
/* eslint-disable @typescript-eslint/no-magic-numbers */
export default function guessJsonIndent<T extends string>(
  jsonString: T,
): T extends `${JsonTokenStart}${JsonTokenStart}${string}` | JsonTokenFull
  ? undefined
  : T extends `${IndentedTokenStart} ${JsonTokenStart}${string}`
    ? 1
    : T extends `${IndentedTokenStart}  ${JsonTokenStart}${string}`
      ? 2
      : T extends `${IndentedTokenStart}    ${JsonTokenStart}${string}`
        ? 4
        : T extends `${IndentedTokenStart}        ${JsonTokenStart}${string}`
          ? 8
          : T extends `${IndentedTokenStart}\t${JsonTokenStart}${string}`
            ? '\t'
            : T extends `${IndentedTokenStart}\t\t${JsonTokenStart}${string}`
              ? '\t\t'
              : undefined | number | `\t${string}`
/* eslint-enable @typescript-eslint/no-magic-numbers */
