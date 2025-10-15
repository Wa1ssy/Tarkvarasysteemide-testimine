const { getUser } = require('../src/users');

describe('getUser', () => {
  test('edu', async () => {
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 1, name: 'Ann' })
    });
    const data = await getUser(1, fetchMock);
    expect(data).toEqual({ id: 1, name: 'Ann' });
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/users/1', { method: 'GET' });
  });

  test('HTTP viga', async () => {
    const fetchMock = jest.fn().mockResolvedValue({ ok: false, status: 404 });
    await expect(getUser(2, fetchMock)).rejects.toThrow('HTTP 404');
  });

  test('vale kuju', async () => {
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ foo: 'bar' })
    });
    await expect(getUser(3, fetchMock)).rejects.toThrow('Bad shape');
  });
});
