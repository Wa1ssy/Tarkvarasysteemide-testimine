const { safeDivide, delay, retry, fetchUser } = require('../src/async');

describe('safeDivide', () => {
  test('divides correctly', () => {
    expect(safeDivide(6, 2)).toBe(3);
  });
  test('throws division by zero', () => {
    expect(() => safeDivide(1, 0)).toThrow();
  });
  test('throws invalid input', () => {
    expect(() => safeDivide('a', 2)).toThrow();
  });
});

describe('delay', () => {
  jest.useFakeTimers();
  test('resolves after given time', async () => {
    const promise = delay(1000);
    jest.advanceTimersByTime(1000);
    await expect(promise).resolves.toBeUndefined();
  });
});

describe('retry', () => {
  test('succeeds after failures', async () => {
    const fn = jest.fn()
      .mockRejectedValueOnce(new Error('fail1'))
      .mockRejectedValueOnce(new Error('fail2'))
      .mockResolvedValue('success');
    const result = await retry(fn, 3);
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(3);
  });
  test('fails after all attempts', async () => {
    const fn = jest.fn().mockRejectedValue(new Error('fail'));
    await expect(retry(fn, 2)).rejects.toThrow('fail');
    expect(fn).toHaveBeenCalledTimes(2);
  });
});

describe('fetchUser', () => {
  test('returns user on success', async () => {
    const fakeApi = { getUser: jest.fn().mockResolvedValue({ id: 1, name: 'Alice' }) };
    await expect(fetchUser(fakeApi, 1)).resolves.toEqual({ id: 1, name: 'Alice' });
    expect(fakeApi.getUser).toHaveBeenCalledWith(1);
  });
  test('rejects on failure', async () => {
    const fakeApi = { getUser: jest.fn().mockRejectedValue(new Error('not found')) };
    await expect(fetchUser(fakeApi, 2)).rejects.toThrow('not found');
  });
});