const { sum } = require('../src/sum');

test('suma básica', () => {
  expect(sum(2, 2)).toBe(4);
});
