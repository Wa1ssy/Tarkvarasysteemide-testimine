function normalizeLettersAndDigits(s) {
  if (typeof s !== 'string') throw new Error('Input must be a string');

  return s
    .toLowerCase()
    .replace(/ä/g, '__auml__')
    .replace(/ö/g, '__ouml__')
    .replace(/ü/g, '__uuml__')
    .replace(/õ/g, '__otilde__')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/__auml__/g, 'ä')
    .replace(/__ouml__/g, 'ö')
    .replace(/__uuml__/g, 'ü')
    .replace(/__otilde__/g, 'õ')
    .replace(/[^\p{L}\p{N}]+/gu, '');
}


function isPalindromeUnicode(s) {
  const norm = normalizeLettersAndDigits(s);
  const reversed = [...norm].reverse().join('');
  return norm === reversed && norm.length > 0;
}

function wordCount(s) {
  if (typeof s !== 'string') throw new Error('Input must be string');
  const matches = s.match(/\p{L}+/gu);
  return matches ? matches.length : 0;
}

module.exports = { normalizeLettersAndDigits, isPalindromeUnicode, wordCount };