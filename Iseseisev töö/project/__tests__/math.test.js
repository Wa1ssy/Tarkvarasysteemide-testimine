const { sum, max, isEven } = require('../src/math');

describe('sum', () => {
  test('adds positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  test('adds negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });
  test('throws on invalid input', () => {
    expect(() => sum('2', 3)).toThrow();
  });
});

describe('max', () => {
  test('returns greater number', () => {
    expect(max(2, 3)).toBe(3);
  });
  test('returns first when equal', () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe('isEven', () => {
  test('0 is even', () => {
    expect(isEven(0)).toBe(true);
  });
  test('2 is even', () => {
    expect(isEven(2)).toBe(true);
  });
  test('3 is not even', () => {
    expect(isEven(3)).toBe(false);
  });
  test('throws on non-integer', () => {
    expect(() => isEven(2.5)).toThrow();
  });
});