const { normalizeUser } = require('../src/shape');

describe('normalizeUser', () => {
  test('korrektne kuju', () => {
    const result = normalizeUser({ id: '42', name: ' Ann ', tags: ['x'] });
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringMatching(/^Ann$/),
        tags: expect.arrayContaining(['x'])
      })
    );
  });

  test('vale tags', () => {
    const result = normalizeUser({ id: '5', name: 'Tom', tags: null });
    expect(result.tags).toEqual([]);
  });
});
