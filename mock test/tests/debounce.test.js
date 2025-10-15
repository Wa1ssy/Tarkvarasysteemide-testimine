const { debounce } = require('../src/debounce');

describe('debounce', () => {
  let fn;
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test('kutsub ainult viimase', () => {
    fn = jest.fn();
    const wrapped = debounce(fn, 200);

    wrapped('a');
    jest.advanceTimersByTime(100);
    wrapped('b');
    jest.advanceTimersByTime(100);
    wrapped('c');
    jest.advanceTimersByTime(199);
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('c');
  });
});
