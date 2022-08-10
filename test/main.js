import test from 'ava'
import guessJsonIndent from 'guess-json-indent'

test('Dummy test', (t) => {
  t.true(guessJsonIndent(true))
})
