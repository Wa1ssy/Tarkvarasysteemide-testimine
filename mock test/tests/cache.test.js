const { Storage, Cache } = require('../src/cache');

describe('Cache', () => {
  test('salvestab ja taaskasutab', () => {
    const s = new Storage();
    const spyGet = jest.spyOn(s, 'get');
    const spySet = jest.spyOn(s, 'set');
    const c = new Cache(s);
    const factory = jest.fn(() => 42);

    const v1 = c.getOrSet('x', factory);
    expect(v1).toBe(42);
    expect(factory).toHaveBeenCalledTimes(1);
    expect(spySet).toHaveBeenCalledWith('x', 42);

    const v2 = c.getOrSet('x', factory);
    expect(v2).toBe(42);
    expect(factory).toHaveBeenCalledTimes(1);
    spyGet.mockRestore();
    spySet.mockRestore();
  });
});
