const { execFileSync } = require('child_process');
const path = require('path');

const cli = path.join(__dirname, '../src/cli.js');

describe('CLI', () => {
  test('edu hello', () => {
    const out = execFileSync('node', [cli, 'hello', 'Anton']);
    expect(out.toString()).toContain('Hello, Anton!');
  });

  test('viga puuduv argument', () => {
    try {
      execFileSync('node', [cli]);
    } catch (err) {
      expect(err.stdout.toString()).toContain('Viga: puudub argument');
    }
  });
});
