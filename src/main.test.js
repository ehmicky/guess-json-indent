import test from 'ava'
import guessJsonIndent from 'guess-json-indent'
import { each } from 'test-each'


each(
  [
    [''],
    [' '],
    ['\n\n'],
    ...['{', '['].flatMap((firstChar) => [
      [` ${firstChar}\n "`, 1],
      [`  ${firstChar}\n "`, 1],
      [`\n\n${firstChar}\n "`, 1],
      [`\n   \n${firstChar}\n "`, 1],
      [`\r\n${firstChar}\n "`, 1],
      [`\t${firstChar}\n "`, 1],
      [`\t\t${firstChar}\n "`, 1],
      [`   \r\n  \t\n  ${firstChar}\n "`, 1],
      [`${firstChar} \n "`, 1],
      [`${firstChar}\t\n "`, 1],
      [`${firstChar}\r\n "`, 1],
      [`${firstChar}\n\r "`],
      [`${firstChar}\n  \n\n "`, 1],
      [firstChar],
      [`${firstChar}"`],
      [`${firstChar}\n"`, 0],
      [`${firstChar}\n "`, 1],
      [`${firstChar}\n  "`, 2],
      [`${firstChar}\n\t"`, '\t'],
      [`${firstChar}\n\t\t"`, '\t\t'],
      [`${firstChar}\n \t"`],
      [`${firstChar}\n\t "`],
    ]),
  ],
  ({ title }, [jsonString, indent]) => {
    test(`Guesses indent | ${title}`, (t) => {
      t.is(guessJsonIndent(jsonString), indent)
    })
  },
)

each(
  [{ one: true }, [true], [{ one: true }]],
  // eslint-disable-next-line no-magic-numbers
  [undefined, 1, 2, 4, 8, '\t', '\t\t'],
  ({ title }, value, indent) => {
    test(`Identifies indent | ${title}`, (t) => {
      t.is(guessJsonIndent(JSON.stringify(value, undefined, indent)), indent)
    })
  },
)
