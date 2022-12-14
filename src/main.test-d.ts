import { expectType } from 'tsd'

import guessJsonIndent from 'guess-json-indent'

expectType<undefined | number | `\t${string}`>(guessJsonIndent(''))
// @ts-expect-error
guessJsonIndent({})
expectType<undefined>(guessJsonIndent('[]'))
expectType<undefined>(guessJsonIndent('{}'))
expectType<undefined>(guessJsonIndent('""'))
expectType<undefined>(guessJsonIndent('true'))
expectType<undefined>(guessJsonIndent('false'))
expectType<undefined>(guessJsonIndent('null'))
expectType<undefined>(guessJsonIndent('12'))
expectType<undefined>(guessJsonIndent('[{}]'))
expectType<undefined>(guessJsonIndent('[true]'))

/* eslint-disable @typescript-eslint/no-magic-numbers */
expectType<1>(guessJsonIndent('[\n "'))
expectType<1>(guessJsonIndent('{\n "'))
expectType<2>(guessJsonIndent('[\n  "'))
expectType<2>(guessJsonIndent('{\n  "'))
expectType<4>(guessJsonIndent('[\n    "'))
expectType<4>(guessJsonIndent('{\n    "'))
expectType<8>(guessJsonIndent('[\n        "'))
expectType<8>(guessJsonIndent('{\n        "'))
/* eslint-enable @typescript-eslint/no-magic-numbers */

expectType<'\t'>(guessJsonIndent('[\n\t"'))
expectType<'\t'>(guessJsonIndent('{\n\t"'))
expectType<'\t\t'>(guessJsonIndent('[\n\t\t"'))
expectType<'\t\t'>(guessJsonIndent('{\n\t\t"'))
