import { getGcd } from '../src/games/gcd-game.js';

describe('greatest common divisor', () => {
  test('common cases', () => {
    expect(getGcd(13, 26)).toBe(13);
    expect(getGcd(14, 21)).toBe(7);
    expect(getGcd(21, 35)).toBe(7);
    expect(getGcd(25, 35)).toBe(5);
    expect(getGcd(16, 40)).toBe(8);
    expect(getGcd(40, 16)).toBe(8);
    expect(getGcd(40, 10)).toBe(10);
  });

  test('unique cases', () => {
    expect(getGcd(0, 0)).toBeNaN();
    expect(getGcd(0, 21)).toBe(21);
    expect(getGcd(25, 0)).toBe(25);
    expect(getGcd(12, 17)).toBe(1);
  });
});
