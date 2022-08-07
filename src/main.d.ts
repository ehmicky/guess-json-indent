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
 *
 * @example
 * ```js
 * ```
 */
// Does a best effort to guess the return value from the type only
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
