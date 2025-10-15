jest.mock('fs');
const fs = require('fs');
const { loadConfig } = require('../src/config');

describe('config', () => {
  test('laeb ja ülekirjutab ENV järgi', () => {
    fs.__setFile('cfg.json', '{"port":3000}');
    expect(loadConfig('cfg.json')).toEqual({ port: 3000 });

    process.env.APP_PORT = '5555';
    expect(loadConfig('cfg.json')).toEqual({ port: 5555 });
    delete process.env.APP_PORT;
  });

  test('viskab vea kui fail puudub', () => {
    expect(() => loadConfig('missing.json')).toThrow('ENOENT');
  });
});
