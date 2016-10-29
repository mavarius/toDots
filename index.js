function todots(str) {
  if (typeof str !== 'string') throw new Error('Input must be string.')
  return str.replace(/\S/g, '.')
}

module.exports = todots
