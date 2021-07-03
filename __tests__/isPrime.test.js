import { isPrime } from '../src/games/prime-game.js';

describe('isPrime', () => {
  test('prime', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(19)).toBeTruthy();
    expect(isPrime(89)).toBeTruthy();
  });

  test('not prime', () => {
    expect(isPrime(-6)).toBeFalsy();
    expect(isPrime(-3)).toBeFalsy();
    expect(isPrime(-1)).toBeFalsy();
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(27)).toBeFalsy();
    expect(isPrime(93)).toBeFalsy();
  });
});
