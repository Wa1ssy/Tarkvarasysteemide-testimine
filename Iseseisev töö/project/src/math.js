function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Arguments must be valid numbers');
  }
  return a + b;
}

function max(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a >= b ? a : b;
}

function isEven(n) {
  if (!Number.isInteger(n)) {
    throw new Error('Argument must be an integer');
  }
  return n % 2 === 0;
}

module.exports = { sum, max, isEven };