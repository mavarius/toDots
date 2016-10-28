const assert = require('chai').assert

const toDots = require('./')

describe('toDots', () => {

  it('replaces characters in a string with periods', () => {
    assert.equal(toDots('abcdefg'), ('.......'))
    assert.equal(toDots('ABCDEFG'), ('.......'))
    assert.equal(toDots('  13E  '), ('  ...  '))
    assert.equal(toDots('a c e g'), ('. . . .'))
  })

  it('handles edge cases', () => {
    assert.equal(toDots(''), (''))
    assert.equal(toDots(' '), (' '))
  })

  it('throws with non-string input', () => {
    assert.throws(() => toDots(null))
    assert.throws(() => toDots({}))
    assert.throws(() => toDots([]))
    assert.throws(() => toDots(undefined))
    assert.throws(() => toDots(123))
    assert.throws(() => toDots(0))
    assert.throws(() => toDots(true))
    assert.throws(() => toDots(false))
    assert.throws(() => toDots(NaN))
  })

  it('throws with missing input', () => {
    assert.throws(() => toDots())
  })

})
