import { expectType, expectAssignable } from 'tsd'

import guessJsonIndent, { Options } from './main.js'

expectType<object>(guessJsonIndent(true))

guessJsonIndent(true, {})
expectAssignable<Options>({})
