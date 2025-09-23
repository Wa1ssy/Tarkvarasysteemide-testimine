const { normalizeLettersAndDigits, isPalindromeUnicode, wordCount } = require('../src/text');

describe('normalizeLettersAndDigits', () => {
  test('removes punctuation and lowercases', () => {
    expect(normalizeLettersAndDigits('Tere, Ärge! 123')).toBe('tereärge123');
  });
  test('handles Cyrillic text', () => {
    expect(normalizeLettersAndDigits('Привет, мир!')).toBe('приветмир');
  });
  test('removes accents', () => {
    expect(normalizeLettersAndDigits('Café - café')).toBe('cafe' + 'cafe');
  });
});

describe('isPalindromeUnicode', () => {
  test.each([
    ['А роза упала на лапу Азора', true],
    ['Saippuakauppias', true],
    ['Tere', false],
  ])('"%s" palindrome -> %s', (input, expected) => {
    expect(isPalindromeUnicode(input)).toBe(expected);
  });
});

describe('wordCount', () => {
  test('counts latin words', () => {
    expect(wordCount('See on lihtne lause')).toBe(4);
  });
  test('counts cyrillic words', () => {
    expect(wordCount('Ночь, улица, фонарь')).toBe(3);
  });
  test('returns 0 for empty string', () => {
    expect(wordCount('')).toBe(0);
  });
  test('returns 0 for punctuation only', () => {
    expect(wordCount('!!!')).toBe(0);
  });
});