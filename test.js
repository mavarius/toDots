const assert = require('chai').assert

const todots = require('./')

describe('todots', () => {

  it('replaces characters in a string with periods', () => {
    assert.equal(todots('abcdefg'), ('.......'))
    assert.equal(todots('ABCDEFG'), ('.......'))
    assert.equal(todots('  13E  '), ('  ...  '))
    assert.equal(todots('a c e g'), ('. . . .'))
  })

  it('handles edge cases', () => {
    assert.equal(todots(''), (''))
    assert.equal(todots(' '), (' '))
  })

  it('throws with non-string input', () => {
    assert.throws(() => todots(null))
    assert.throws(() => todots({}))
    assert.throws(() => todots([]))
    assert.throws(() => todots(undefined))
    assert.throws(() => todots(123))
    assert.throws(() => todots(0))
    assert.throws(() => todots(true))
    assert.throws(() => todots(false))
    assert.throws(() => todots(NaN))
  })

  it('throws with missing input', () => {
    assert.throws(() => todots())
  })

})
