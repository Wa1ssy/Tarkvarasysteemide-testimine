function safeDivide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Arguments must be numbers');
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retry(fn, attempts) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

async function fetchUser(fakeApi, id) {
  if (!fakeApi || typeof fakeApi.getUser !== 'function') {
    throw new Error('Invalid API dependency');
  }
  return fakeApi.getUser(id);
}

module.exports = { safeDivide, delay, retry, fetchUser };