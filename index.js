function toDots(str) {
  if (typeof str !== 'string') throw new Error('Input must be string.')
  return str.replace(/\S/g, '.')
}

module.exports = toDots
